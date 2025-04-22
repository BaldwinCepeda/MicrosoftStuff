import React from 'react';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import StartBar from './components/StartBar';
import Header from './components/Header';
import PurgedAndReprovision from './components/ScriptPost/posts/PurgedAndReprovision';
import GetAllUserObjects from './components/ScriptPost/posts/GetAllUserObjects';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* AppBar should go on top */}
      <StartBar />

      {/* Then header */}
      <Header />
      <div
        style={{
          flex: 1,
          padding: '16px',
          marginTop: '16px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px', // Add spacing between sections
        }}
      >
        {/* PowerShell Scripts Section */}
        <section id="powershell-scripts" style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <h2>PowerShell Scripts</h2>
          <p>Explore various PowerShell scripts for automation and management.</p>
          <div
            style={{
              display: 'flex', // Use flexbox to align items in a row
              gap: '16px', // Add spacing between the buttons
              marginBottom: '16px', // Add spacing below the button row
            }}
          >
            <Button
              style={{ width: 256 }}
              onClick={() => document.getElementById('purged-and-reprovision').scrollIntoView({ behavior: 'smooth' })}
            >
              Purged And Reprovision Objects
            </Button>
            <Button
              style={{ width: 256 }}
              onClick={() => document.getElementById('get-all-user-objects').scrollIntoView({ behavior: 'smooth' })}
            >
              Get All User Objects
            </Button>
          </div>
          <section id="purged-and-reprovision">
            <PurgedAndReprovision />
          </section>
          <section id="get-all-user-objects">
            <GetAllUserObjects />
          </section>
        </section>

        {/* KQL Section */}
        <section id="kql" style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <h2>KQL</h2>
          <p>Learn about KQL queries for data analysis and monitoring.</p>
          <Button>View KQL Queries</Button>
        </section>

        {/* Active Directory Documentation Section */}
        <section id="active-directory-docs" style={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <h2>Active Directory Documentation</h2>
          <p>Comprehensive documentation for Active Directory management.</p>
          <Button>View Documentation</Button>
        </section>
      </div>
    </div>
  );
}

export default App;