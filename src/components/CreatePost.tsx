import {
  Modal,
  Box,
  Typography,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Autocomplete,
} from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../providers/UserProvider';
import { topic } from '../types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface CreatePostProps {
  isOpen: boolean;
  handleClose: () => void;
}

const CreatePost = ({ isOpen, handleClose }: CreatePostProps) => {
  const [topics, setTopics] = useState<{ label: string; id: number }[]>([]);
  const [topic, setTopic] = useState<{ label: string; id: number } | null>(null);
  const [title, setTitle] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();
  const { user } = useContext(UserContext);

  const validateForm = () => !!topic && !!title && title !== '' && !!content && content !== '';

  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/posts`, { title, content, creator_id: user?.id, topic_id: topic?.id })
      .then(() => {
        handleClose();
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/topics`)
      .then((result) =>
        setTopics((result.data as topic[]).map((topic) => ({ label: topic.topic_name, id: topic.topic_id })))
      );
  }, []);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>יצירת פוסט</DialogTitle>
      <DialogContent>
        <Autocomplete
          disablePortal
          id='select-topic'
          options={topics}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label='נושא' />}
          value={topic}
          onChange={(event, newTopic) => setTopic(newTopic)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
        />
      </DialogContent>
      <DialogContent dir='rtl' sx={{ direction: 'rtl' }}>
        <TextField
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          margin='dense'
          id='title'
          label='כותרת'
          fullWidth
          variant='standard'
        />
      </DialogContent>
      <DialogContent dir='rtl' sx={{ direction: 'rtl' }}>
        <TextField
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
          margin='dense'
          id='content'
          label='תוכן'
          fullWidth
          variant='standard'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>ביטול</Button>
        <Button disabled={!validateForm()} onClick={handleSubmit}>
          פרסום
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePost;
