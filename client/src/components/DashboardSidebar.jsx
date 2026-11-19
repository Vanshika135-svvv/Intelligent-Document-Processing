import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6 flex flex-col justify-between text-slate-300 font-sans">
      
      {/* Top Brand & Navigation */}
      <div className="space-y-8">
        <div className="flex items-center space-x-3 px-2">
          <div className="bg-indigo-600 text-white font-extrabold px-3 py-1.5 rounded-xl text-sm shadow-lg shadow-indigo-600/30">IDP</div>
          <div>
            <span className="font-bold text-white text-sm block">Enterprise Dashboard</span>
            <span className="text-[10px] text-indigo-400 font-semibold tracking-wider uppercase">Document Intelligence</span>
          </div>
        </div>

        <nav className="space-y-1.5 text-xs font-semibold">
          <Link 
            to="/dashboard" 
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition ${isActive('/dashboard') ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'hover:bg-slate-800 text-slate-300'}`}
          >
            <span>📁 My Documents</span>
            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-indigo-300">3 Active</span>
          </Link>
          
          <Link 
            to="/workspace" 
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300 transition"
          >
            <span>⚡ New Extraction</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Live</span>
          </Link>

          <Link 
            to="/dashboard" 
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300 transition"
          >
            <span>📊 Analytics & Metrics</span>
            <span className="text-[10px] text-indigo-400">F1: 0.970</span>
          </Link>

          <Link 
            to="/dashboard" 
            className="flex items-center px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300 transition"
          >
            <span>💬 RAG Knowledge Base</span>
          </Link>

          <Link 
            to="/dashboard" 
            className="flex items-center px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300 transition"
          >
            <span>⚙️ Account & API Keys</span>
          </Link>
        </nav>
      </div>

      {/* Middle Quick Stats Widget */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 my-6">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-400">Model Engine</span>
          <span className="text-emerald-400 font-bold">LayoutLMv3</span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-400">Vector DB</span>
          <span className="text-indigo-400 font-bold">Atlas (384-d)</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-indigo-500 h-full w-[97%]"></div>
        </div>
        <p className="text-[10px] text-slate-500 text-right">Accuracy: 97.0% Macro F1</p>
      </div>

      {/* Bottom Profile & Logout */}
      <div className="pt-4 border-t border-slate-800 space-y-3">
        <div className="flex items-center space-x-3 px-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold flex items-center justify-center text-xs">
            VT
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">Vanshika Tiwari</p>
            <p className="text-[10px] text-slate-500 truncate">Group 10 Lead</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 transition flex items-center space-x-2"
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </button>
      </div>

    </aside>
  );
}