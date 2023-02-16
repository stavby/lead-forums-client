import Box from '@mui/material/Box/Box';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import React from 'react';
import MiddleBoxProfilePage from './MiddleBoxProfilePage';

const ProfilePage = () => (
  <>
    <CardMedia
      component='img'
      height='130px'
      width='100%'
      image='/resources/profilePageBackground.png'
    />
    <div style={{ display: 'flex' }}>
      <Box>Box 1</Box>
      <MiddleBoxProfilePage
        image='/resources/profpic.png'
        name='ישראלה ישראלי'
        role='שגרירה'
        instagramLink=''
        linkedInLink=''
        facebookLink=''
      />
      <Box>Box 1</Box>
    </div>
  </>
);

export default ProfilePage;
