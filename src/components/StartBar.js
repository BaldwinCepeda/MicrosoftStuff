// src/components/StartBar.js
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    MenuList,
    MenuListItem,
    Separator,
} from 'react95';
import styled from 'styled-components';

import logoIMG from '../assets/images/logo.ico';
import nightWin from '../assets/images/flying_windows_100.ico';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

function StartBar({ toggleDarkMode, isDarkMode }) {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <AppBar>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    {/* Left side - menu button */}
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Button
                            onClick={() => setOpen(!open)}
                            active={open}
                            style={{ fontWeight: 'bold' }}
                        >
                            <img
                                src={logoIMG}
                                alt="logo"
                                style={{ height: '20px', marginRight: 4 }}
                            />
                            Home
                        </Button>
                        {open && (
                            <MenuList
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '100%',
                                    zIndex: 9999,
                                }}
                                onClick={() => setOpen(false)}
                            >
                                <MenuListItem onClick={() => window.location.href = 'https://microsoft-stuff.vercel.app/'}>
                                    Home Page
                                </MenuListItem>
                                <MenuListItem onClick={() => window.location.href = 'https://baldwincepeda.me/'}>
                                    About
                                </MenuListItem>
                                <Separator />
                            </MenuList>
                        )}
                    </div>

                    {/* Right side - dark mode toggle */}
                    <Button
                        square
                        onClick={toggleDarkMode}
                        title={`Toggle ${isDarkMode ? 'Light' : 'Dark'} Mode`}
                    >
                        <img
                            src={nightWin}
                            alt="Toggle Theme"
                            style={{
                                height: '20px',
                                filter: isDarkMode ? 'invert(1)' : 'none',
                            }}
                        />
                    </Button>
                </Toolbar>
            </AppBar>
        </Wrapper>
    );
}

export default StartBar;
