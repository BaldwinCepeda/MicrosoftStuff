// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Frame } from 'react95';
import {
  AppBar,
  Toolbar,
  Window,
  Button,
  WindowHeader,
  WindowContent,
  Separator,
  TextInput,
} from 'react95';

const HeaderWrapper = styled(Frame)`
  width: 100%; /* Fill parent, not screen */
  margin-top: 48px;
  margin-bottom: 24px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Left-align content */
  background-color: ${({ theme }) => theme.borderDark};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 0.85rem;
  margin: 0.25rem 0 0;
`;

function Header() {
  return (
    <HeaderWrapper variant="well">
      <Title>Baldwin's cool and nifty site!</Title>
      <Subtitle>All About Identity, Security, PowerShell…</Subtitle>

      <Window
        style={{
          width: '100%',
          boxSizing: 'border-box',
          marginTop: '16px',
        }}
      >
        <WindowHeader active={true} className="window-title">
          IAM-SHELL.EXE
        </WindowHeader>
        <WindowContent>
          <p>🔐 Identity & Access Management | 🛡️ Security | 💻 PowerShell Engineering</p>
          <p style={{ fontFamily: 'monospace' }}>PS C:\Users\Baldwin&gt;_</p>
          <div style={{ marginTop: '1rem' }}>
            <Button>PowerShell Scripts</Button>
            <Button>KQL</Button>
            <Button>AD</Button>
          </div>
        </WindowContent>
      </Window>
    </HeaderWrapper>
  );
}

export default Header;
