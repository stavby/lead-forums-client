import { Avatar, Box, Button, Typography } from '@mui/material';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import { GoogleUser } from '../types';

const Login = () => {
  const navigate = useNavigate();
  const [googleUser, setGoogleUser] = useState<TokenResponse | null>(null);
  const { setUser } = useContext(UserContext);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setGoogleUser(codeResponse);
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (googleUser) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
          headers: {
            Authorization: `Bearer ${googleUser.access_token}`,
            Accept: 'application/json',
          },
        })
        .then(async (result) => {
          const resultUser: GoogleUser = result.data;
          const userId = (await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/login`, resultUser)).data;
          setUser({
            id: userId,
            name: resultUser.name,
            picture: resultUser.picture,
            nativeUser: resultUser,
          });
          navigate('/');
        });
    }
  }, [googleUser, navigate, setUser]);

  return (
    <Box
      width={'100%'}
      height={'100%'}
      sx={{
        backgroundImage: 'url("resources/loginBackground.jpg")',
        backgroundSize: '100vw 100vh',
        backgroundRepeat: 'no-repeat',
        overflow: 'auto',
      }}
    >
      <Box
        textAlign={'center'}
        width='30vw'
        height='30vh'
        mx='auto'
        my='10%'
        sx={{ backgroundColor: '#FFEFD4', borderRadius: '3%', color: '#5E021C' }}
      >
        <Box pt={3}>
          <Typography fontSize={'5vh'}>כניסה</Typography>
        </Box>
        <Box width='fit-content' mx='auto' mt={3}>
          <Button
            sx={{ direction: 'ltr' }}
            variant='contained'
            onClick={() => login()}
            startIcon={<Avatar src='resources/googleLogo.png' />}
          >
            Google כניסה באמצעות
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
