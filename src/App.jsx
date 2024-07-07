import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { DetectionPage } from './pages/detection';
import { AboutPage } from './pages/about';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/detection" element={<DetectionPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
};

export default App;
