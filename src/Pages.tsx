import React from 'react';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';

export const pages = [
  { path: 'profile', component: <ProfilePage /> },
  { path: 'login', component: <Login /> },
];
