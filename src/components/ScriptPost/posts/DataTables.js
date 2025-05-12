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

const DataTables = () => {
    const blocks = [
        {
            comment: '# Step 1: Create a new DataTable',
            code: `
$table = New-Object System.Data.DataTable`.trim(),
        },
        {
            comment: '# Step 2: Define your columns',
            code: `
$table.Columns.Add("Fruits", [String])
$table.Columns.Add("Prices". [int])
      `.trim(),
        },


        {
            comment: '# Step 3: Add your rows',
            code: `
$table.Rows.Add("Plantains", 5)
$table.Rows.Add("Apples", 10)
      `.trim(),
        },
        {
            comment: '# Step 3: View the table',
            code: `
$table | Format-Table -AutoSize
      `.trim(),
        }
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
                <h1>📊 Using PowerShell DataTables</h1>
                <p><small>Posted by Baldwin | April 23, 2025</small></p>
            </StyledHeader>

            <section>
                <p>
                    <code>DataTables</code> allow you to efficiently store and manipulate information in a structured, consistent way. They originate from the .NET framework and provide a flexible mechanism for managing data in memory. Unlike other data structures in PowerShell, <code>DataTables</code> can handle multiple data types and support complex data manipulation. I found this especially useful when writing scripts that work with large datasets.
                </p>


                {blocks.map((block, i) => (
                    <Terminal key={i}>
                        <div className="comment">{block.comment}</div>
                        <div className="code">{block.code}</div>
                    </Terminal>
                ))}

                <p>
                    ⚠️ <strong>Note:</strong> DataTables are useful when you want to build structured tables in memory and export them as CSV or display in tables.
                </p>
            </section>

            <footer style={{ marginTop: '1rem' }}>
                <Button onClick={handleCopy}>📋 Copy Full Script</Button>{' '}
                <Button onClick={() => alert('Back to blog')}>⬅️ Back</Button>
            </footer>
        </Frame>
    );
};

export default DataTables;
