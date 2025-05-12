import React from 'react';
import { Button } from 'react95';

import StartBar from './components/StartBar';
import Header from './components/Header';
import PurgedAndReprovision from './components/ScriptPost/posts/PurgedAndReprovision';
import GetAllUserObjects from './components/ScriptPost/posts/GetAllUserObjects';
import ADGroupDups from './components/ScriptPost/posts/ADGroupDups';
import ScriptCard from './components/ScriptPost/ScriptCard';
import DataTables from './components/ScriptPost/posts/DataTables';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Start Bar */}
      <div style={{ position: 'relative', display: 'inline-block' }}>

        <StartBar />
      </div>


      {/* Header */}
      <div style={{
        margin: '0 16px',
        width: 'calc(100% - 32px)',
        boxSizing: 'border-box',
      }}>
        <Header />
      </div>

      {/* Navigation Section (same width as cards) */}
      <div style={{ margin: '0 16px', width: 'calc(100% - 32px)' }}>
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: '24px 16px 16px',
          }}
        >
          <h2>PowerShell Scripts</h2>
          <p>Explore various PowerShell scripts for automation and management.</p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '16px',
            }}
          >
            <Button
              style={{ width: 256 }}
              onClick={() =>
                document.getElementById('purged-and-reprovision').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Purged And Reprovision Objects
            </Button>
            <Button
              style={{ width: 256 }}
              onClick={() =>
                document.getElementById('get-all-user-objects').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get All User Objects
            </Button>
            <Button
              style={{ width: 256 }}
              onClick={() => document.getElementById('').scrollIntoView({ behavior: 'smooth' })}
            >
              GPO Extract
            </Button>
          </div>
        </div>
      </div>

      {/* Script Post Section */}
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >


        <div id="get-all-user-objects">
          <ScriptCard>
            <DataTables></DataTables>
          </ScriptCard>
        </div>
        <div id="purged-and-reprovision">
          <ScriptCard>
            <PurgedAndReprovision />
          </ScriptCard>
        </div>

        <div id="get-all-user-objects">
          <ScriptCard>
            <GetAllUserObjects />
          </ScriptCard>
        </div>

        <div id="get-all-user-objects">
          <ScriptCard>
            <ADGroupDups></ADGroupDups>
          </ScriptCard>
        </div>
      </div>
    </div>
  );
}

export default App;
