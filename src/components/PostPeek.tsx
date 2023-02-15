import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const styles = {
  profilePicture: { width: '20%', marginRight: '10px' },
  postContent: {
    cardStyle: {
        direction: 'rtl',
        padding: 2,
        width: '60%',
        marginRight: 0,
    },
    cardText: {
        title: {
            fontSize: '14px' },
        content: {
            fontSize: '11px' },
    },
  },
  postUploadTime: { fontSize: '11px' },
};

const PostPeekCard = () => (
  <Card
    sx={{
      maxWidth: 360,
    }}
  >
    <CardActionArea sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <CardMedia
        component='img'
        src='resources/Ellipse.png'
        alt='green iguana'
        sx={styles.profilePicture}
      />
      <CardContent sx={styles.postContent.cardStyle}>
        <Typography gutterBottom sx={styles.postContent.cardText.title} component='div'>
          האקתון 2023
        </Typography>
        <Typography sx={styles.postContent.cardText.content} color='text.secondary'>
          כמה כיף לי
        </Typography>
      </CardContent>
      <CardContent sx={{ width: '25%', marginRight: 0 }}>
        <Typography sx={styles.postUploadTime} color='text.secondary'>
          לפני 5 שעות
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default PostPeekCard;
