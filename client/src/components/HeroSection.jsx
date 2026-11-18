import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-indigo-100">
        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
        Layout-Aware Document Intelligence
      </div>
      <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
        Make your <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          documents <br/> intelligent.
        </span>
      </h1>
      <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
        Upload complex documents, understand their layout, extract structured information, and ask questions directly from your documents.
      </p>
      <div className="pt-4 flex space-x-4">
        <Link to="/workspace" className="bg-slate-900 text-white px-8 py-3.5 rounded-lg font-medium text-lg hover:bg-slate-800 transition shadow-lg">
          Try it now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;