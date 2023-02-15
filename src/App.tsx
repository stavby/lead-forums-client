import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bar from './components/Bar';
import ProfilePicture from './components/ProfilePicture';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import './App.css';

const App = () => (

  <BrowserRouter>
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={function (credentialResponse: CredentialResponse): void {
          console.log(credentialResponse);
      } } />
    </div>
    <Routes>
      <Route path='/' element={<Bar />}>
        <Route index element={<div></div>} />
        <Route path='blogs' element={<ProfilePicture />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
