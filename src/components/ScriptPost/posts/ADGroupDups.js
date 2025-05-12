import React from 'react';
import styled from 'styled-components';
import { Frame, Button } from 'react95';

// Styled Terminal block
const Terminal = styled.div`
  background-color: #000;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  padding: 0.75rem 1rem;
  border: 2px inset #ccc;
  margin: 0.75rem 0;
  white-space: pre-wrap;

  .comment {
    color: #32cd32;
    margin-bottom: 0.4rem;
  }

  .code {
    color: #fef9c3;
  }
`;

const StyledHeader = styled.header`
  margin-bottom: 1.25rem;
  text-align: left;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.9rem;
    color: #333;
  }
`;

const ADGroupDups = () => {
    const blocks = [
        {
            comment: '# Step 1: Group AD groups by name and filter duplicates',
            code: `
$duplicateGroups = Get-ADGroup -Filter * |
  Group-Object Name |
  Where-Object { $_.Count -gt 1 }
      `.trim(),
        },
        {
            comment: '# Step 2: Output duplicate group details',
            code: `
foreach ($group in $duplicateGroups) {
  Write-Host "❗ Duplicate Group Name: $($group.Name)" -ForegroundColor Yellow
  $group.Group | ForEach-Object {
    Write-Host " - DistinguishedName: $($_.DistinguishedName)" -ForegroundColor Cyan
  }
}
      `.trim(),
        },
        {
            comment: '# ✅ Done!',
            code: `
Write-Host "Finished checking for duplicate group names." -ForegroundColor Green
      `.trim(),
        },
    ];

    const handleCopy = () => {
        const allCode = blocks.map(block => `${block.comment}\n${block.code}`).join('\n\n');
        navigator.clipboard.writeText(allCode);
        alert('✅ Script copied to clipboard!');
    };

    return (
        <Frame
            variant="well"
            style={{
                padding: '1rem 1.25rem',
                marginBottom: '1.5rem',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <StyledHeader>
                <h1>🧑‍🤝‍🧑 Find Duplicate AD Group Names</h1>
                <p><small>Posted by Baldwin | April 23, 2025</small></p>
            </StyledHeader>

            <section>
                <p>
                    This PowerShell script identifies groups in Active Directory that have duplicate names and lists
                    their distinguished names for easier cleanup or auditing.
                </p>

                {blocks.map((block, i) => (
                    <Terminal key={i}>
                        <div className="comment">{block.comment}</div>
                        <div className="code">{block.code}</div>
                    </Terminal>
                ))}

                <p>
                    ⚠️ <strong>Note:</strong> You must have the <code>RSAT: ActiveDirectory</code> module installed
                    and sufficient privileges to query group objects in the domain. Also note one could use the same logic to find duplicate accounts or computers
                    simply switch the <i>Get-ADGroup</i> command with <b>Get-ADUser</b> or <i>Get-ADComputer</i>.
                </p>

            </section>

            <footer style={{ marginTop: '1rem' }}>
                <Button onClick={handleCopy}>📋 Copy Full Script</Button>{' '}
                <Button onClick={() => alert('Back to blog')}>⬅️ Back</Button>
            </footer>
        </Frame>
    );
};

export default ADGroupDups;
