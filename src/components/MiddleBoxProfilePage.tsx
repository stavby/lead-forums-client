import zIndex from '@mui/material/styles/zIndex';
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
    <img
      width='180'
      height='180'
      style={{
        borderRadius: '50%',
        position: 'relative',
        zIndex: 2,
        top: '-50px',
      }}
      src={image}
    />
  </>
);

export default MiddleBoxProfilePage;
