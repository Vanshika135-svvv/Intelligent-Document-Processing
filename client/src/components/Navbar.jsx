import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
      <div className="flex items-center space-x-2">
        <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold">ID</div>
        <div>
          <h1 className="font-bold text-xl leading-none">IDP</h1>
          <span className="text-xs text-slate-500">Document Intelligence</span>
        </div>
      </div>
      <nav className="hidden md:flex space-x-8 text-slate-600 font-medium">
        <a href="#features" className="hover:text-indigo-600 transition">Features</a>
        <a href="#how-it-works" className="hover:text-indigo-600 transition">How it works</a>
        <a href="#about" className="hover:text-indigo-600 transition">About</a>
      </nav>
      <div className="flex items-center space-x-4">
        <Link to="/login" className="font-medium text-slate-600 hover:text-indigo-600 transition">Login</Link>
        <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 shadow-md transition">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;