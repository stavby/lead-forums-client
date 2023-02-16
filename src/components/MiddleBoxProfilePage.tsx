import CardMedia from '@mui/material/CardMedia/CardMedia';
import React from 'react';

interface MiddleBoxProfilePageProps {
  image: string;
  name: string;
  role: string;
  instagramLink: string;
  linkedInLink: string;
  facebookLink: string;
}

const MiddleBoxProfilePage = ({
  image,
  name,
  role,
  instagramLink,
  linkedInLink,
  facebookLink,
}: MiddleBoxProfilePageProps) => (
  <>
    <CardMedia component='img' height='50' width='50' src={image} />
  </>
);

export default MiddleBoxProfilePage;
