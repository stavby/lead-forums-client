import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
    <img src='/resources/subjeect.jpg' style={{width:'100%', height: 175}}></img>
      <div>{user?.name}</div>
    </>
  );
};

export default Profile;
