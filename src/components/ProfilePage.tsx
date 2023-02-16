import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import MiddleBoxProfilePage from './MiddleBoxProfilePage';
import ProfileBioCard from './ProfileBioCard';
import ProfileTextCard from './ProfileTextCard';

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
        <div style={{ flex: '33.3%' }}>
          <ProfileTextCard />
        </div>
        <div
          style={{
            flex: '33.3%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: -150,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <MiddleBoxProfilePage
              image='/resources/profpic.png'
              name='ישראלה ישראלי'
              role='שגרירה'
              instagramLink=''
              linkedInLink=''
              facebookLink=''
            />
          </div>
        </div>
        <div
          style={{
            flex: '33.3%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: 30,
              marginBottom: 20,
            }}
          >
            פרטים
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ProfileBioCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
