import Box from '@mui/material/Box/Box';
import React from 'react';
import TopicCard from './TopicCard';

const HomePage = () => (
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
      <Box margin={2}>
        <TopicCard
          image={'/resources/img1.jpg'}
          topicName={'מנהיגות'}
          topicDescription={
            'מהי מנהיגות? כיצד ניצן לממש אותה? פורום ההנהלה כאן בשבילכם'
          }
        />
      </Box>
      <Box margin={2}>
        <TopicCard
          image={'/resources/img2.jpg'}
          topicName={'עבודה'}
          topicDescription={'חיפוש עובדים ומשרות פנויות'}
        />
      </Box>{' '}
      <Box margin={2}>
        <TopicCard
          image={'/resources/img3.jpg'}
          topicName={'לימודים ומלגות'}
          topicDescription={'כל מה שתצטרכו לדעת לגבי הלימודים שלכם'}
        />
      </Box>
    </Box>
  </>
);

export default HomePage;
