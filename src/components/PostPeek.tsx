import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { post } from '../types';

const styles = {
  cardSizes: { width: 360, height: 100 },
  profilePicture: { width: '20%', marginRight: '10px' },
  postContent: {
    cardStyle: {
      direction: 'rtl',
      height: 100,
      padding: '15px',
      marginTop: '35px',
    },
    cardText: {
      title: {
        fontSize: 18,
        height: 30,
      },
      content: {
        fontSize: '11px',
        maxHeight: 60,
        width: 150,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },
  postUploadTime: { fontSize: '11px' },
};

const PostPeekCard = ({
  post: { title, content, uploadDate },
}: {
  post: post;
}) => (
  <Card sx={styles.cardSizes}>
    <CardActionArea
      sx={{
        height: styles.cardSizes.height,
        width: styles.cardSizes.width,
        display: 'flex',
        flexDirection: 'row-reverse',
      }}
    >
      <CardMedia
        component='img'
        src='resources/Ellipse.png'
        alt='green iguana'
        sx={styles.profilePicture}
      />
      <CardContent sx={styles.postContent.cardStyle}>
        <Typography
          gutterBottom
          sx={styles.postContent.cardText.title}
          component='div'
        >
          {title}
        </Typography>
        <Typography
          sx={styles.postContent.cardText.content}
          color='text.secondary'
        >
          {content}
        </Typography>
      </CardContent>
      <CardContent sx={{ width: '25%', marginRight: 0 }}>
        <Typography sx={styles.postUploadTime} color='text.secondary'>
          {uploadDate.toLocaleString()}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default PostPeekCard;
