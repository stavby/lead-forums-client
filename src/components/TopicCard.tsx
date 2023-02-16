import React, { useEffect, useState } from 'react';
import { Box, CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { postWithUser, topic } from '../types';
import PostPeekCard from './PostPeek';
import axios from 'axios';

interface TopicCardProps {
  topic: topic;
}

const TopicCard = ({ topic: { picture, topic_description, topic_name, topic_id } }: TopicCardProps) => {
  const [posts, setPosts] = useState<postWithUser[] | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/posts/byTopic?topic=${topic_id}`)
      .then((result) => setPosts(result.data));
  }, [topic_id]);

  return (
    <Card
      sx={{
        width: 345,
        height: 500,
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'column',
        background: '#FFF9EF',
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <CardMedia component='img' height='130px' width='100%' image={picture} />
        <CardContent style={{ width: 300 }}>
          <Typography gutterBottom variant='h5' component='div'>
            {topic_name}
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
            {topic_description}
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
        {posts?.map((post) => (
          <Box key={post.post_id} style={{ display: 'flex', justifyContent: 'center', marginTop: '5%' }}>
            <PostPeekCard post={post}></PostPeekCard>
          </Box>
        ))}
      </div>
    </Card>
  );
};

export default TopicCard;
