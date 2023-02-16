import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

export const pages = [
  { path: 'profile', component: <Profile /> },
  { path: 'login', component: <Login /> },
];
