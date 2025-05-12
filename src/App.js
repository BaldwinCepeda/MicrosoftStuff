// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import shelbiTeal from 'react95/dist/themes/shelbiTeal'; // ✅ Your preferred light theme
import fxDev from 'react95/dist/themes/fxDev';           // ✅ Dark mode theme

import { Button } from 'react95';

import StartBar from './components/StartBar';
import Header from './components/Header';
import ScriptCard from './components/ScriptPost/ScriptCard';

import PurgedAndReprovision from './components/ScriptPost/posts/PurgedAndReprovision';
import GetAllUserObjects from './components/ScriptPost/posts/GetAllUserObjects';
import ADGroupDups from './components/ScriptPost/posts/ADGroupDups';
import DataTables from './components/ScriptPost/posts/DataTables';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? fxDev : shelbiTeal}>
      <GlobalStyles />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Start Bar */}
        <StartBar toggleDarkMode={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />

        {/* Header */}
        <div style={{ margin: '0 16px', width: 'calc(100% - 32px)', boxSizing: 'border-box' }}>
          <Header />
        </div>

        {/* Navigation Section */}
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
                  document.getElementById('purged-and-reprovision')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Purged And Reprovision Objects
              </Button>
              <Button
                style={{ width: 256 }}
                onClick={() =>
                  document.getElementById('get-all-user-objects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Get All User Objects
              </Button>
              <Button
                style={{ width: 256 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                GPO Extract
              </Button>
            </div>
          </div>
        </div>

        {/* Script Posts */}
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
              <DataTables />
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
              <ADGroupDups />
            </ScriptCard>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
