import Box from '@mui/material/Box/Box';
import React from 'react';
import MoreTopicsButton from './MoreTopicsButton';
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
      <Box margin={2}>
        <TopicCard
          image={'/resources/img4.jpg'}
          topicName={'פרויקטים'}
          topicDescription={'פורום הפרויקטים הגדול. ניהול, הובלה, ייעוץ ועוד!'}
        />
      </Box>
      {/* <MoreTopicsButton stx={{}} /> */}
    </Box>
  </>
);

export default HomePage;
