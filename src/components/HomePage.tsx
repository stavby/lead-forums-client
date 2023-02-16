import Box from '@mui/material/Box/Box';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import { topic } from '../types';
import TopicCard from './TopicCard';

const HomePage = () => {
  const { user } = useContext(UserContext);
  const [topics, setTopics] = useState<topic[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/topics`).then((result) => setTopics(result.data));
  }, []);

  return (
    <>
      <Box
        margin={1}
        padding={1}
        display={'flex'}
        flexDirection={'row-reverse'}
        borderRadius={1}
        flexWrap={'wrap'}
        justifyContent={'space-around'}
      >
        {topics?.map((topic) => (
          <Box key={topic.topic_id} margin={2}>
            <TopicCard topic={topic} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default HomePage;
