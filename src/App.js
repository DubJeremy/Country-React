import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/a-propos" exact element={<About/>} />
        <Route  path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

