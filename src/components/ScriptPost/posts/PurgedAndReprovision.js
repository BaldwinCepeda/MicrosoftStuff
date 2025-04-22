// src/components/posts/PurgedAndReprovision.js
import React from 'react';
import styled from 'styled-components';
import { Frame, Button } from 'react95';

// Styled PowerShell block with green comments and yellow code
const Terminal = styled.div`
  background-color: #000;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  padding: 1rem;
  border: 2px inset #ccc;
  margin: 1rem 0;
  white-space: pre-wrap;

  .comment {
    color: #32cd32; /* lime green */
    margin-bottom: 0.5rem;
  }

  .code {
    color: #fef9c3; /* light yellow */
  }
`;

const StyledHeader = styled.header`
  margin-bottom: 1.5rem;
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

const PurgedAndReprovision = () => {
  const blocks = [
    {
      comment: '# Step 1: Create a Data Table for Logging',
      code: `
$logTable = New-Object System.Data.DataTable
$logTable.Columns.Add("Timestamp", [string])
$logTable.Columns.Add("Comment", [string])
      `.trim(),
    },
    {
      comment: '# Step 2: Prompt User for Comment',
      code: `
$comment = Read-Host "Enter comment for reprovisioning action"
$timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
$row = $logTable.NewRow()
$row["Timestamp"] = $timestamp
$row["Comment"] = $comment
$logTable.Rows.Add($row)
      `.trim(),
    },
    {
      comment: '# Step 3: Set Sync Flag to False (disable sync to Entra Connect)',
      code: `
Set-ADUser -Identity "user@domain.com" -Replace @{ cloudFiltered = "true" }
      `.trim(),
    },
    {
      comment: '# Step 4: Wait for user to sync to Soft Deleted state',
      code: `
Write-Host "Waiting for user to appear in Soft Delete..."
Start-Sleep -Seconds 30
      `.trim(),
    },
    {
      comment: '# Step 5: Remove User from Soft Delete Bin (Hard Delete)',
      code: `
Connect-AzureAD
$user = Get-AzureADUser -All $true | Where-Object {
  $_.UserPrincipalName -eq "user@domain.com" -and $_.AccountEnabled -eq $false
}
Remove-AzureADUser -ObjectId $user.ObjectId
      `.trim(),
    },
    {
      comment: '# Step 6: Clear Sync Flag so the user syncs again',
      code: `
Set-ADUser -Identity "user@domain.com" -Clear cloudFiltered
      `.trim(),
    },
    {
      comment: '# ✅ Done!',
      code: `
Write-Host "User purged and reprovisioned successfully!" -ForegroundColor Green
      `.trim(),
    }
  ];

  const handleCopy = () => {
    const fullScript = blocks.map(block => `${block.comment}\n${block.code}`).join('\n\n');
    navigator.clipboard.writeText(fullScript);
    alert('✅ Script copied to clipboard!');
  };

  return (
    <Frame variant="well" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
      <StyledHeader>
        <h1>🔄 Azure Purged & Reprovision Script with Comment Logging</h1>
        <p><small>Posted by Baldwin | April 18, 2025</small></p>
      </StyledHeader>

      <section>
        <p>
          This enhanced PowerShell script walks through purging and reprovisioning a user in Azure AD while
          also prompting for a comment to log the reason for the action. Great for audits and change tracking.
        </p>

        {blocks.map((block, i) => (
          <Terminal key={i}>
            <div className="comment">{block.comment}</div>
            <div className="code">{block.code}</div>
          </Terminal>
        ))}

        <p>
          ⚠️ <strong>Note:</strong> Make sure you're authorized to perform Azure AD hard deletes. This process
          removes soft-deleted users permanently and relies on Entra Connect behavior.
        </p>
      </section>

      <footer style={{ marginTop: '1rem' }}>
        <Button onClick={handleCopy}>📋 Copy Full Script</Button>{' '}
        <Button onClick={() => alert('Back to blog')}>⬅️ Back</Button>
      </footer>
    </Frame>
  );
};

export default PurgedAndReprovision;