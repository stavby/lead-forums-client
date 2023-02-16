import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { googleLogout } from '@react-oauth/google';
import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

const Bar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const settings = [
    { display: 'Profile', onSelect: () => {} },
    {
      display: 'Logout',
      onSelect: () => {
        if (!user) {
          return;
        }

        googleLogout();
        setUser(null);
      },
    },
  ];

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
              <IconButton size='large' onClick={toggleIsMenuOpen} color='inherit'>
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>{/*Menu items */}</Box>

            <Box sx={{ flexGrow: 0 }}>
              {user ? (
                <>
                  <Tooltip title='Open settings'>
                    <IconButton onClick={toggleIsUserMenuOpen} sx={{ p: 0 }}>
                      <Avatar
                        imgProps={{ referrerPolicy: 'no-referrer' }}
                        src={user?.picture ?? '/static/images/avatar/2.jpg'}
                      />
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
                    {settings.map(({ display, onSelect }) => (
                      <MenuItem key={display} onClick={onSelect}>
                        <Typography textAlign='center'>{display}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button variant='contained' onClick={() => navigate('/login')}>
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box height={'100%'}>
        <Outlet />
      </Box>
    </>
  );
};
export default Bar;
