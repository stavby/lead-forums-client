import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <img
        src='/resources/subjeect.jpg'
        style={{ width: '100%', height: 175 }}
      ></img>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          width: '100%',
        }}
      >
        <div style={{ flex: '33.3%' }}> asd1 </div>
        <div style={{ flex: '33.3%' }}> asd2 </div>
        <div style={{ flex: '33.3%' }}> asd3 </div>
      </div>
    </>
  );
};

export default Profile;
