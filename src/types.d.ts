import { CredentialResponse } from '@react-oauth/google';

interface User {
  id: number;
  name: string;
  picture?: string;
  nativeUser: GoogleUser | null;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface GoogleUser {
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
}

interface post {
  post_id: number;
  author: user;
  topic_id: number;
  title: string;
  content: string;
  upload_time: Date;
}

interface postWithUser extends post {
  user: { user_id: number; picture: string };
}

interface topic {
  topic_id: number;
  topic_name: string;
  topic_description: string;
  picture: string;
}
