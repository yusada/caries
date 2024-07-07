import React from 'react';
import { Link } from 'react-router-dom';
import tooth from '../assets/images/media/tooth.svg';

const Navbar = () => {
  return (
    <header className="w-full flex justify-center absolute h-20 z-10">
      <nav className="flex justify-center items-center w-11/12 gap-8 relative">
        <div className="absolute">
          <img src={tooth} alt="tooth" />
        </div>
        <div className="text-white text-2xl font-bold">
          Caries Detection
        </div>
        <div className="flex items-center grow gap-4">
          <Link className="text-white text-lg" to="/">Home</Link>
          <Link className="text-white text-lg" to="/model">Model</Link>
          <Link className="text-white text-lg" to="/about">About</Link>
          <Link className="text-white text-lg" to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/detection" className="text-white border rounded-full py-2 px-7">Detect</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
