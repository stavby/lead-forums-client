import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const infoStyle = {
  fontSize: 17,
};

const infoValueStyle = {
  fontSize: 14,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: 'bold',
};
const ProfileTextCard = () => {
  return (
    <Card sx={{ direction: 'rtl', marginLeft: 15, marginTop: 15, width: 350 }}>
      <CardContent>
        <Typography sx={{ textAlign: 'center' }} variant='h5' component='div'>
          קצת על עצמי
        </Typography>

        <Typography variant='body2'>
          הצטרפתי לתוכנית ומאז חיי השתנו, הכרתי המון אנשים שעזרו לי בהובלת
          פרויקטים משמעותיים ואני שמח שהצטרפתי לעמותת ליד
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileTextCard;
