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

const GetAllUserObjects = () => {
  const blocks = [
    {
      comment: '# Step 1: Grab the current directory and prepare output path',
      code: `
$currentDate = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$outputPath = "C:\\Exports\\AD_Users_$currentDate.csv"
      `.trim(),
    },
    {
      comment: '# Step 2: Create an empty DataTable',
      code: `
$table = New-Object System.Data.DataTable
$table.Columns.Add("samAccountName")
$table.Columns.Add("GivenName")
$table.Columns.Add("Surname")
$table.Columns.Add("LastLogonDate")
$table.Columns.Add("PasswordLastSet")
      `.trim(),
    },
    {
      comment: '# Step 3: Get all users with desired properties',
      code: `
$users = Get-ADUser -Filter * -Properties GivenName, Surname, LastLogonDate, PasswordLastSet
      `.trim(),
    },
    {
      comment: '# Step 4: Loop through users and add to DataTable',
      code: `
foreach ($user in $users) {
  $row = $table.NewRow()
  $row["samAccountName"] = $user.samAccountName
  $row["GivenName"] = $user.GivenName
  $row["Surname"] = $user.Surname
  $row["LastLogonDate"] = $user.LastLogonDate
  $row["PasswordLastSet"] = $user.PasswordLastSet
  $table.Rows.Add($row)
}
      `.trim(),
    },
    {
      comment: '# Step 5: Export to CSV',
      code: `
$table | Export-Csv -Path $outputPath -NoTypeInformation

Write-Host "✅ Export complete!" -ForegroundColor Green
Write-Host "Output saved to: $outputPath"
      `.trim(),
    },
  ];

  const handleCopy = () => {
    const allCode = blocks.map(block => block.code).join('\n\n');
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
        <h1>📥 Export All AD User Objects</h1>
        <p><small>Posted by Baldwin | April 22, 2025</small></p>
      </StyledHeader>

      <section>
        <p>
          This script collects all user objects from Active Directory, pulls key attributes like logon and
          password data, and writes them to a structured DataTable before exporting to CSV.
        </p>

        {blocks.map((block, i) => (
          <Terminal key={i}>
            <div className="comment">{block.comment}</div>
            <div className="code">{block.code}</div>
          </Terminal>
        ))}

        <p>
          ⚠️ <strong>Note:</strong> Use an account with adequate domain read permissions and make sure
          <code> RSAT: ActiveDirectory </code> module is installed.
        </p>
      </section>

      <footer style={{ marginTop: '1rem' }}>
        <Button onClick={handleCopy}>📋 Copy Full Script</Button>{' '}
        <Button onClick={() => alert('Back to blog')}>⬅️ Back</Button>
      </footer>
    </Frame>
  );
};

export default GetAllUserObjects;
