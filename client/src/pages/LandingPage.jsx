import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation Header */}
      <header className="border-b border-slate-800 px-8 py-5 flex justify-between items-center sticky top-0 bg-slate-900/90 backdrop-blur-md z-50">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 text-white font-extrabold px-3.5 py-2 rounded-xl text-lg tracking-wider shadow-lg shadow-indigo-500/20">IDP</div>
          <div>
            <h1 className="text-base font-bold text-white tracking-wide">Intelligent Document Processing</h1>
            <p className="text-[10px] text-indigo-400 font-semibold tracking-widest uppercase">Vision-Language Enterprise Suite</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-indigo-400 transition">Features</a>
          <a href="#architecture" className="hover:text-indigo-400 transition">Architecture</a>
          <a href="#benchmarks" className="hover:text-indigo-400 transition">Benchmarks</a>
          <Link to="/dashboard" className="hover:text-indigo-400 transition">Dashboard</Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/login" className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition">
            Sign In
          </Link>
          <Link to="/signup" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition">
            Sign Up
          </Link>
          <Link to="/workspace" className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition shadow-lg shadow-indigo-600/30">
            Launch Workspace →
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>Layout-Aware Vision-Language Transformer Engine</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Transform Unstructured Docs Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Structured Intelligence.</span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed max-w-xl">
            Bypass rigid templates. Our decoupled serverless architecture combines OpenCV pre-processing, LayoutLMv3 spatial tokenization, and MongoDB Atlas vector RAG to parse complex invoices, receipts, and enterprise forms with zero template reliance.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/workspace" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition shadow-xl shadow-indigo-600/20 text-sm">
              Open IDP Workspace
            </Link>
            <Link to="/dashboard" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-7 py-3.5 rounded-xl transition border border-slate-700 text-sm">
              View Dashboard
            </Link>
          </div>
        </div>

        {/* Hero Preview Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex justify-between items-center pb-4 border-b border-slate-700">
              <span className="text-xs font-bold text-slate-400 uppercase">Live Processing Preview</span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">Macro F1: 0.970</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex justify-between items-center">
                <span className="text-xs text-slate-400">Vendor Entity</span>
                <span className="text-xs font-bold text-indigo-300">Aegis Technologies Pvt Ltd</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex justify-between items-center">
                <span className="text-xs text-slate-400">Spatial Bounding Box</span>
                <span className="text-xs font-mono text-emerald-400">[80, 80, 450, 150]</span>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/50 flex justify-between items-center">
                <span className="text-xs text-slate-400">Vector Embedding</span>
                <span className="text-xs font-mono text-violet-400">all-MiniLM-L6-v2 (384-d)</span>
              </div>
              <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-500/30 flex justify-between items-center">
                <span className="text-xs text-indigo-300">Total Payable</span>
                <span className="text-base font-extrabold text-white">₹84,560.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section id="features" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Enterprise Capabilities</h2>
            <h3 className="text-3xl font-extrabold text-white">Engineered for Maximum Precision</h3>
            <p className="text-sm text-slate-400 mt-2">Built from the ground up to solve complex document parsing bottlenecks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 bg-indigo-600/10 text-indigo-400 rounded-xl flex items-center justify-center font-bold text-lg mb-4">01</div>
              <h4 className="text-lg font-bold text-white mb-2">OpenCV Preprocessing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Applies Otsu's binarization, affine deskewing, and Gaussian noise filtering to clean low-quality scans prior to OCR.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 bg-indigo-600/10 text-indigo-400 rounded-xl flex items-center justify-center font-bold text-lg mb-4">02</div>
              <h4 className="text-lg font-bold text-white mb-2">LayoutLMv3 Spatial AI</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Fuses text tokens, 2D normalized bounding box coordinates, and visual image patches into a unified transformer backbone.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 bg-indigo-600/10 text-indigo-400 rounded-xl flex items-center justify-center font-bold text-lg mb-4">03</div>
              <h4 className="text-lg font-bold text-white mb-2">Atlas Vector RAG Chat</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Embeds extracted text fields into 384-dimensional dense vectors stored in MongoDB Atlas for instant semantic querying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section (No Port Numbers) */}
      <section id="architecture" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">System Design</h2>
            <h3 className="text-3xl font-extrabold text-white">Decoupled Microservice Pipeline</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xs font-bold text-indigo-400 uppercase">Tier 1 • Client Edge</span>
              <h4 className="text-base font-bold text-white mt-1">Presentation SPA</h4>
              <p className="text-xs text-slate-400 mt-2">React client featuring drag-and-drop file ingestion, real-time extraction tabs, and RAG chat interface.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xs font-bold text-indigo-400 uppercase">Tier 2 • Gateway API</span>
              <h4 className="text-base font-bold text-white mt-1">Node.js Express Server</h4>
              <p className="text-xs text-slate-400 mt-2">Express.js server managing multipart stream parsing, authorization, and MongoDB Mongoose persistence.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xs font-bold text-indigo-400 uppercase">Tier 3 • AI Inference</span>
              <h4 className="text-base font-bold text-white mt-1">Python FastAPI Engine</h4>
              <p className="text-xs text-slate-400 mt-2">Uvicorn worker runtimes isolating heavy model weights, LayoutLMv3 forward passes, and vector embeddings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarks Table Section */}
      <section id="benchmarks" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Empirical Evaluation</h2>
            <h3 className="text-3xl font-extrabold text-white">Performance Metrics across 8,000 Documents</h3>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase bg-slate-900/50">
                  <th className="py-4 px-6">Evaluation Metric</th>
                  <th className="py-4 px-6">Baseline OCR</th>
                  <th className="py-4 px-6 text-indigo-400">Our IDP Framework</th>
                  <th className="py-4 px-6">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Layout Macro F1-Score</td>
                  <td className="py-4 px-6 text-slate-400">0.582</td>
                  <td className="py-4 px-6 font-bold text-emerald-400">0.970</td>
                  <td className="py-4 px-6 text-indigo-300 font-semibold">+66.7%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">ANLS Transcription Fidelity</td>
                  <td className="py-4 px-6 text-slate-400">0.614</td>
                  <td className="py-4 px-6 font-bold text-emerald-400">0.952</td>
                  <td className="py-4 px-6 text-indigo-300 font-semibold">+55.0%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Extraction Precision</td>
                  <td className="py-4 px-6 text-slate-400">0.601</td>
                  <td className="py-4 px-6 font-bold text-emerald-400">0.972</td>
                  <td className="py-4 px-6 text-indigo-300 font-semibold">+61.7%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Streamlined Enterprise Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-10 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 text-white font-extrabold px-3 py-1.5 rounded-lg text-sm">IDP</div>
              <span className="font-bold text-white text-sm">Intelligent Document Suite</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Next-generation spatial document intelligence powered by multimodal transformers and vector RAG search.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/workspace" className="hover:text-indigo-400 transition">Document Workspace</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-400 transition">User Dashboard</Link></li>
              <li><a href="#features" className="hover:text-indigo-400 transition">Layout Extraction</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Account Access</h4>
            <ul className="space-y-2">
              <li><Link to="/login" className="hover:text-indigo-400 transition">Sign In</Link></li>
              <li><Link to="/signup" className="hover:text-indigo-400 transition">Create Account</Link></li>
              <li><a href="https://github.com/Vanshika135-svvv/Intelligent-Document-Processing" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition">GitHub Repository</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">System Status</h4>
            <p className="text-slate-500 leading-relaxed mb-2">
              SOC2 compliant document persistence secured via MongoDB Atlas encryption.
            </p>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ● All Systems Operational
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>© 2026 Intelligent Document Processing Suite. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link to="/login" className="hover:text-slate-300 transition">Sign In</Link>
            <Link to="/signup" className="hover:text-slate-300 transition">Sign Up</Link>
            <Link to="/workspace" className="hover:text-slate-300 transition">Workspace</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}