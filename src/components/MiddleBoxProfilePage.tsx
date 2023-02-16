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
    <img width='180' height='180' style={{ borderRadius: '50%' }} src={image} />
  </>
);

export default MiddleBoxProfilePage;
