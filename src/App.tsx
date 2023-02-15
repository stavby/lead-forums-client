import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bar from './components/Bar';
import HomePage from './components/HomePage';
import { pages } from './Pages';

const App = () => (
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
);

export default App;
