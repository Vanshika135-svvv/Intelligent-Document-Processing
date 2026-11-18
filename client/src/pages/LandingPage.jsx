import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faff] bg-grid-pattern bg-gradient-radial relative overflow-x-hidden">
      
      {/* Top Navbar - Exact Match to Screenshot */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center max-w-[1380px] mx-auto w-full z-20">
        <Link to="/" className="flex items-center space-x-3.5 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition">
            ID
          </div>
          <div>
            <h1 className="font-extrabold text-xl text-slate-900 tracking-tight leading-none">IDP</h1>
            <span className="text-xs text-slate-400 font-medium tracking-wide">Document Intelligence</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-[15px] text-slate-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition">How it works</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
        </nav>

        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-[15px] font-semibold text-slate-700 hover:text-indigo-600 transition">
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold text-[15px] hover:from-indigo-600 hover:to-indigo-700 transition shadow-lg shadow-indigo-500/25"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section - Exact Match to Screenshot */}
      <main className="flex-grow flex items-center max-w-[1380px] mx-auto w-full px-6 md:px-12 pt-8 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Typography & CTA */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-md text-indigo-600 px-4 py-2 rounded-full text-xs font-semibold shadow-sm border border-indigo-100/80">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2.5 animate-pulse"></span>
              Layout-Aware Document Intelligence
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-[68px] font-extrabold text-[#0f172a] leading-[1.06] tracking-tight">
              Make your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500">
                documents <br />
                intelligent.
              </span>
            </h1>

            <p className="text-lg sm:text-[19px] text-slate-500 max-w-xl leading-relaxed font-normal">
              Upload complex documents, understand their layout, extract structured information, and ask questions directly from your documents.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link 
                to="/workspace" 
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/25 flex items-center space-x-2"
              >
                <span>Open IDP Workspace</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </Link>
              <Link 
                to="/dashboard" 
                className="bg-white text-slate-700 border border-slate-200 px-7 py-4 rounded-xl font-semibold text-base hover:bg-slate-50 transition shadow-sm"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Tax Invoice Preview Window (Exact Match to Screenshot) */}
          <div className="lg:col-span-6 relative">
            {/* Soft Purple Glow Behind Mockup */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200/40 via-blue-100/30 to-purple-200/40 rounded-3xl blur-2xl -z-10"></div>

            {/* Browser Window Frame */}
            <div className="bg-white/95 backdrop-blur-xl rounded-[28px] border border-slate-200/80 shadow-[0_25px_70px_-15px_rgba(79,70,229,0.15)] p-5 sm:p-7 relative">
              
              {/* Window Top Bar */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <span className="text-xs font-medium text-slate-400">IDP Processing Preview</span>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-500">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-ping"></span>
                  Live
                </span>
              </div>

              {/* Inner Document Card */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm relative">
                
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">TAX INVOICE</h3>
                    <p className="text-[11px] font-semibold text-slate-400 tracking-[0.18em] uppercase mt-1">
                      AEGIS TECHNOLOGIES
                    </p>
                  </div>
                  {/* Small Blue Pill Behind Floating Card */}
                  <div className="w-10 h-6 bg-indigo-500 rounded-lg opacity-80"></div>
                </div>

                {/* 3 Key-Value Extraction Cards */}
                <div className="grid grid-cols-3 gap-3.5 mb-6">
                  <div className="bg-[#f8faff] p-3.5 rounded-xl border border-slate-100/90">
                    <p className="text-[11px] text-slate-400 font-medium mb-1">Invoice Number</p>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">INV-2026-1048</p>
                  </div>
                  <div className="bg-[#f8faff] p-3.5 rounded-xl border border-slate-100/90">
                    <p className="text-[11px] text-slate-400 font-medium mb-1">Invoice Date</p>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">02 Oct 2026</p>
                  </div>
                  <div className="bg-[#f8faff] p-3.5 rounded-xl border border-slate-100/90">
                    <p className="text-[11px] text-slate-400 font-medium mb-1">Vendor</p>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm truncate">Aegis Technologies</p>
                  </div>
                </div>

                {/* Extracted Table Preview */}
                <div className="bg-[#f8faff] rounded-xl border border-slate-100 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200/60 text-[11px] font-semibold text-slate-400">
                        <th className="py-2.5 px-4">Product</th>
                        <th className="py-2.5 px-2">Qty</th>
                        <th className="py-2.5 px-2">Price</th>
                        <th className="py-2.5 px-4 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-600">Document Processing</td>
                        <td className="py-3 px-2 text-slate-500">1</td>
                        <td className="py-3 px-2 text-slate-400">₹45,000</td>
                        <td className="py-3 px-4 text-right font-bold text-slate-800">₹45,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-600">AI Extraction Module</td>
                        <td className="py-3 px-2 text-slate-500">1</td>
                        <td className="py-3 px-2 text-slate-400">₹25,000</td>
                        <td className="py-3 px-4 text-right font-bold text-slate-800">₹25,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-600">Integration Support</td>
                        <td className="py-3 px-2 text-slate-500">1</td>
                        <td className="py-3 px-2 text-slate-400">₹14,560</td>
                        <td className="py-3 px-4 text-right font-bold text-slate-800">₹14,560</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Floating "Layout Detected" Badge on the Right */}
              <div className="absolute -right-4 sm:-right-6 top-28 bg-white px-4 py-3 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)] border border-slate-100 flex items-center space-x-3.5 z-30">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  ✦
                </div>
                <div className="pr-2">
                  <p className="text-xs font-bold text-slate-800">Layout Detected</p>
                  <p className="text-[11px] text-slate-400">Tables & key-values</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Pipeline / Features Section below fold (Matches your Activity & Package Diagrams) */}
      <section id="features" className="py-16 bg-white/70 backdrop-blur-md border-t border-slate-200/60">
        <div className="max-w-[1380px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">End-to-End Architecture</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Layout-Aware Vision-Language Pipeline</h2>
            <p className="text-slate-500 text-sm mt-2">Preserving spatial coordinates, bounding boxes, and structural relationships from PDF to MongoDB.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-bold text-slate-800 mb-1">Preprocessing & Binarization</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Validates PDFs/images, destroys background watermarks via pixel thresholding, and converts pages for spatial analysis.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-bold text-slate-800 mb-1">LayoutLMv3 + Spatial OCR</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Combines Tesseract TSV coordinates with fine-tuned LayoutLMv3 token classification (`S-COMPANY`, `S-DATE`, `S-TOTAL`).</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-bold text-slate-800 mb-1">Structured JSON & MongoDB</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Maps spatial regions into clean Key-Value pairs and Table schemas, storing validated JSON records in MongoDB.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="font-bold text-slate-800 mb-1">Interactive RAG Querying</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Ask natural language questions directly against your processed documents with confidence scores and instant retrieval.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Brain AI Assistant Button (Bottom Right - Exact Match to Screenshot) */}
      <Link
        to="/workspace"
        title="Open AI Document Workspace"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 transition z-50"
      >
        <span className="text-xl">🧠</span>
      </Link>

    </div>
  );
};

export default LandingPage;