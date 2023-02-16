import Box from '@mui/material/Box/Box';
import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import MiddleBoxProfilePage from './MiddleBoxProfilePage';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <img
        src='/resources/subject1.png'
        style={{ width: '100%', height: 130 }}
      ></img>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ flex: '33.3%' }}> asd1 </div>
        <Box>
          <MiddleBoxProfilePage
            image='/resources/profpic.png'
            name='ישראלה ישראלי'
            role='שגרירה'
            instagramLink=''
            linkedInLink=''
            facebookLink=''
          />
        </Box>
        <div style={{ flex: '33.3%' }}> asd3 </div>
      </div>
    </>
  );
};

export default ProfilePage;
