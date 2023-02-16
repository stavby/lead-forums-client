import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useMemo } from 'react';
import { postWithUser } from '../types';

const styles = {
  cardSizes: { width: 320, height: 70 },
  profilePicture: { width: '20%', marginRight: '20px', borderRadius: '50%' },
  postContent: {
    cardStyle: {
      height: 100,
      padding: '15px',
      marginTop: '35px',
    },
    cardText: {
      title: {
        fontSize: 16,
        height: 30,
        width: 160,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      content: {
        fontSize: '11px',
        maxHeight: 60,
        width: 160,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },
  postUploadTime: { fontSize: '11px' },
};

const PostPeekCard = ({ post: { title, content, upload_time: uploadDate, user: author } }: { post: postWithUser }) => {
  const displayTime = useMemo(() => new Date(uploadDate).toLocaleString('he-IL'), [uploadDate]);

  return (
    <Card sx={styles.cardSizes}>
      <CardActionArea
        sx={{
          height: styles.cardSizes.height,
          width: styles.cardSizes.width,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <CardMedia component='img' src={author.picture} sx={styles.profilePicture} />
        <CardContent sx={styles.postContent.cardStyle}>
          <Typography gutterBottom sx={styles.postContent.cardText.title} component='div'>
            {title}
          </Typography>
          <Typography sx={styles.postContent.cardText.content} color='text.secondary'>
            {content}
          </Typography>
        </CardContent>
        <CardContent sx={{ width: '25%', marginRight: 0 }}>
          <Typography sx={styles.postUploadTime} color='text.secondary'>
            {displayTime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostPeekCard;
