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
  id: number;
  author: user;
  topic: topic;
  title: string;
  content: string;
  uploadDate: Date;
}

interface topic {
  id: number;
  name: string;
}
