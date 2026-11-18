import React, { useState, useRef } from 'react';

const FileUpload = ({ onFileUpload, isProcessing }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <div 
      className={`relative w-full h-48 rounded-xl border-2 dashed flex flex-col items-center justify-center transition-all ${
        dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'
      }`}
      onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
    >
      <input ref={inputRef} type="file" className="hidden" accept=".pdf,image/*" onChange={handleChange} />
      
      {isProcessing ? (
        <div className="flex flex-col items-center text-indigo-600">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-3"></div>
          <p className="font-semibold text-sm">AI is processing document...</p>
        </div>
      ) : (
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          </div>
          <p className="text-sm font-medium text-slate-700">Drag & drop your document here</p>
          <p className="text-xs text-slate-500 mt-1 mb-3">Supports PDF, JPG, PNG up to 10MB</p>
          <button onClick={() => inputRef.current.click()} className="text-sm bg-white border border-slate-300 px-4 py-1.5 rounded-lg font-medium hover:bg-slate-50 shadow-sm transition">
            Browse Files
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;