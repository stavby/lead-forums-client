import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const infoStyle = {
  fontSize: 17,
};

const infoValueStyle = {
  fontSize: 14,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: 'bold'
};
const ProfileBioCard = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Card sx={{ minWidth: 275, direction: 'rtl', width: 390}}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            fontSize: 20,
            justifyContent: 'space-between',
          }}
        >
          <Typography style={infoStyle} variant='body2'>
            גיל
          </Typography>
          <Typography style={infoStyle} variant='body2'>
            מחזור
          </Typography>
          <Typography style={infoStyle} variant='body2'>
            איזור מגורים
          </Typography>
          <Typography style={infoStyle} variant='body2'>
            כתובת מייל
          </Typography>
          <Typography style={infoStyle} variant='body2'>
            מספר טלפון
          </Typography>
        </div>
        <div
          style={{
            height: 300,
            width: 100,
            display: 'flex',
            flexDirection: 'column',
            fontSize: 20,
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={infoValueStyle} variant='body2'>
            21
          </Typography>
          <Typography sx={infoValueStyle} variant='body2'>
            מחזור י"ג
          </Typography>
          <Typography sx={infoValueStyle} variant='body2'>
            שוהם
          </Typography>
          <Typography sx={infoValueStyle} variant='body2'>
            {user?.nativeUser?.email}
          </Typography>
          <Typography sx={infoValueStyle} variant='body2'>
            פרטי
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBioCard;
