import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bar from './components/Bar';
import './App.css';
import HomePage from './components/HomePage';
import { pages } from './Pages';
import UserProvider from './providers/UserProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => (
  <GoogleOAuthProvider clientId='41662238799-f8f0104b181hn9e5uec7vvtspefdoljt.apps.googleusercontent.com'>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Bar />}>
            <Route index element={<HomePage />} />
            {pages.map((page) => (
              <Route key={page.path} path={page.path} element={page.component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </GoogleOAuthProvider>
);

export default App;
