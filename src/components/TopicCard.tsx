import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';

interface TopicCardProps {
  image: string;
  topicName: string;
  topicDescription: string;
}

const TopicCard = ({ image, topicName, topicDescription }: TopicCardProps) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component='img'
        height='120'
        width='160'
        image={image}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {topicName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {topicDescription}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default TopicCard;
