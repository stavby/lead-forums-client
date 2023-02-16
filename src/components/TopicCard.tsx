import { CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import PostPeekCard from './PostPeek';

interface TopicCardProps {
  image: string;
  topicName: string;
  topicDescription: string;
}

const TopicCard = ({ image, topicName, topicDescription }: TopicCardProps) => (
  <Card
    sx={{
      width: 345,
      height: 500,
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <CardActionArea
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <CardMedia component='img' height='130px' width='100%' image={image} />
      <CardContent style={{ width: 300 }}>
        <Typography gutterBottom variant='h5' component='div'>
          {topicName}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {topicDescription}
        </Typography>
      </CardContent>
    </CardActionArea>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}
      >
        <PostPeekCard
          post={{
            author: {
              displayName: 'asdas',
              pictureUrl: '/resources/Ellipse.png',
            },
            content: 'איזה כיף זה האקתון!!!! אין על הצוות',
            title: 'האקתון 2023',
            id: 1,
            topic: {
              id: 1,
              name: 'מנהיגות',
            },
            uploadDate: new Date(),
          }}
        ></PostPeekCard>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}
      >
        <PostPeekCard
          post={{
            author: {
              displayName: 'asdas',
              pictureUrl: '/resources/Ellipse.png',
            },
            content: 'איזה כיף זה האקתון!!!! אין על הצוות',
            title: 'האקתון 2023',
            id: 1,
            topic: {
              id: 1,
              name: 'מנהיגות',
            },
            uploadDate: new Date(),
          }}
        ></PostPeekCard>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}
      >
        <PostPeekCard
          post={{
            author: {
              displayName: 'asdas',
              pictureUrl: '/resources/Ellipse.png',
            },
            content: 'איזה כיף זה האקתון!!!! אין על הצוות',
            title: 'האקתון 2023',
            id: 1,
            topic: {
              id: 1,
              name: 'מנהיגות',
            },
            uploadDate: new Date(),
          }}
        ></PostPeekCard>
      </div>
    </div>
  </Card>
);

export default TopicCard;
