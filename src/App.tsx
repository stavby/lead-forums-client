import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bar from './components/Bar';
import ProfilePicture from './components/ProfilePicture';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Bar />}>
        <Route index element={<div></div>} />
        <Route path='blogs' element={<ProfilePicture />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
