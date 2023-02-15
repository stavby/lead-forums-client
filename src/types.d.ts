export interface post {
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

interface user {
  displayName: string;
  pictureUrl: string;
}
