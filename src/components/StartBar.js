// src/components/StartBar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, MenuList, MenuListItem, Separator, TextInput } from 'react95';
import styled from 'styled-components';
import logoIMG from '../assets/images/logo.ico';
import nightWin from '../assets/images/flying_windows_100.ico'
const Wrapper = styled.div`
  width: 100%;
  position: fixed; /* Fix the StartBar at the top */
  top: 0;
  z-index: 1000; /* Ensure it stays above other components */
`;

function StartBar() {
    const [open, setOpen] = useState(false);

    return (
        <Wrapper>
            <AppBar>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Button
                            onClick={() => setOpen(!open)}
                            active={open}
                            style={{ fontWeight: 'bold' }}
                        >

                            <img
                                src={logoIMG}
                                alt='logo'
                                style={{ height: '20px', marginRight: 4 }}
                            />
                            Home
                        </Button>
                        {open && (
                            <MenuList
                                style={{
                                    position: 'absolute', // <- the key fix
                                    left: 0,
                                    top: '100%',
                                    zIndex: 9999, // ensure it's above content
                                }}
                            >
                                <MenuListItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home Page</MenuListItem>
                                <MenuListItem onClick={() => window.location.href = 'https://Baldwincepeda.me/'}>About</MenuListItem>
                                <Separator />

                            </MenuList>
                        )}
                    </div>
                    <Button square>
                        <img
                            src={nightWin}
                            alt='nightWin'
                            style={{ height: '20px' }}
                        />
                    </Button>

                </Toolbar>
            </AppBar>
        </Wrapper >
    );
}

export default StartBar;