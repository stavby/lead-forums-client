import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Bar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  const toggleIsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleIsUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <AppBar position='static' style={{ background: '#FFF9EF' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Link to='/'>
              <img alt='logo' src='resources/logo.png' width={'25%'} />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                onClick={toggleIsMenuOpen}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(isMenuOpen)}
                onClose={handleCloseMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* Menu items for phones */}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/*Menu items */}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={toggleIsUserMenuOpen} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isUserMenuOpen}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};
export default Bar;
