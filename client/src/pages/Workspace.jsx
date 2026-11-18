import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Components (Matching exact filenames in src/components)
import FileUpload from '../components/FileUpload';
import DocumentViewer from '../components/DocumentViewer';
import ExtractedData from '../components/ExtractedData';
import ChatBox from '../components/ChatBox';

// Import API Service
import { uploadDocument } from '../services/api';

const Workspace = ({ onDocumentProcessed }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [extractedEntities, setExtractedEntities] = useState(null);
  const [documentId, setDocumentId] = useState(null);
  const [activeTab, setActiveTab] = useState('keyvalues'); // 'keyvalues' | 'tables' | 'json'

  const handleFileUpload = async (file) => {
    if (!file) return;

    setIsProcessing(true);
    setUploadedImageUrl(URL.createObjectURL(file));
    setExtractedEntities(null);

    try {
      const response = await uploadDocument(file);
      const entities = response?.extractedData || response?.entities || [];
      setExtractedEntities(entities);

      if (response?.documentId) {
        setDocumentId(response.documentId);
      }
      if (onDocumentProcessed) {
        onDocumentProcessed({
          id: response?.documentId || `DOC-${Date.now()}`,
          name: file.name,
          type: file.type.includes('pdf') ? 'PDF' : 'IMAGE',
          size: `${(file.size / 1024).toFixed(1)} KB`,
          uploadDate: 'Just now',
          status: 'Completed',
          confidence: 97.5
        });
      }
    } catch (error) {
      console.error('Failed to process document:', error);
      alert('Could not reach backend server on localhost:5000. Make sure your Express and FastAPI servers are running, or click "Load Sample Invoice" to preview the UI.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Allows instant UI testing for your evaluation presentation
  const handleLoadSample = () => {
    setExtractedEntities([
      { label: 'S-COMPANY', text: 'Aegis Technologies', bbox: [80, 120, 420, 165], confidence: 0.99 },
      { label: 'S-DATE', text: '02 Oct 2026', bbox: [650, 210, 820, 245], confidence: 0.97 },
      { label: 'S-ADDRESS', text: 'Indore, Madhya Pradesh', bbox: [80, 175, 410, 210], confidence: 0.95 },
      { label: 'S-TOTAL', text: '₹84,560.00', bbox: [720, 780, 910, 830], confidence: 0.98 }
    ]);
  };

  const handleExportJson = () => {
    const jsonString = JSON.stringify({ documentId: documentId || 'SAMPLE-1048', extractedEntities }, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'extracted_document_data.json';
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faff] bg-grid-pattern">
      {/* Top Workspace Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 sticky top-0 z-30">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                ID
              </div>
              <span className="font-extrabold text-slate-900 text-lg">IDP Workspace</span>
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/dashboard" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition">
              &larr; Document Dashboard
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleLoadSample}
              className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3.5 py-2 rounded-xl border border-indigo-100 hover:bg-indigo-100 transition"
            >
              ✦ Load Sample Extraction
            </button>
            <button
              onClick={handleExportJson}
              disabled={!extractedEntities}
              className="text-xs font-semibold bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 disabled:opacity-40 transition"
            >
              Export JSON (UC-7)
            </button>
          </div>
        </div>
      </header>

      {/* Main 12-Column Workspace Grid */}
      <main className="flex-grow max-w-[1440px] w-full mx-auto p-6 grid lg:grid-cols-12 gap-6">
        
        {/* Left 7 Columns: Upload + Spatial Bounding Box Viewer */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-800">1. Upload Document (PDF / Receipt Image)</h3>
              <span className="text-[11px] text-slate-400 font-medium">Binarization + LayoutLMv3 Active</span>
            </div>
            <FileUpload onFileUpload={handleFileUpload} isProcessing={isProcessing} />
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-800">2. Spatial Layout & Bounding Box Viewer</h3>
              <div className="flex items-center space-x-3 text-[11px] font-semibold">
                <span className="flex items-center text-blue-600"><span className="w-2.5 h-2.5 bg-blue-500 rounded-sm mr-1"></span>COMPANY</span>
                <span className="flex items-center text-amber-600"><span className="w-2.5 h-2.5 bg-amber-400 rounded-sm mr-1"></span>DATE</span>
                <span className="flex items-center text-emerald-600"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm mr-1"></span>TOTAL</span>
              </div>
            </div>
            <DocumentViewer imageUrl={uploadedImageUrl} extractedBoxes={extractedEntities} />
          </div>
        </div>

        {/* Right 5 Columns: Multi-Tab Extraction Results + RAG ChatBox */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          
          {/* Tabbed Extraction Inspector */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('keyvalues')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    activeTab === 'keyvalues' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  Key-Value Pairs
                </button>
                <button
                  onClick={() => setActiveTab('tables')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    activeTab === 'tables' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  Tables
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    activeTab === 'json' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  Raw JSON
                </button>
              </div>
            </div>

            {activeTab === 'keyvalues' && <ExtractedData data={extractedEntities} />}

            {activeTab === 'tables' && (
              <div className="bg-[#f8faff] rounded-xl border border-slate-200/70 overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100/80 text-slate-500 font-semibold border-b border-slate-200">
                      <th className="py-2.5 px-3">Detected Region</th>
                      <th className="py-2.5 px-3">Extracted Value</th>
                      <th className="py-2.5 px-3 text-right">Coordinates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {extractedEntities && extractedEntities.length > 0 ? (
                      extractedEntities.map((item, i) => (
                        <tr key={i}>
                          <td className="py-2.5 px-3 font-bold text-indigo-600">{item.label}</td>
                          <td className="py-2.5 px-3 text-slate-800 font-medium">{item.text || 'Detected'}</td>
                          <td className="py-2.5 px-3 text-right text-slate-400 font-mono text-[10px]">
                            [{item.bbox ? item.bbox.join(', ') : '0,0,0,0'}]
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="py-8 text-center text-slate-400">
                          Upload a document or click "Load Sample Extraction" to view table rows.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'json' && (
              <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-[11px] font-mono overflow-auto max-h-60">
                {JSON.stringify(
                  {
                    status: extractedEntities ? 'COMPLETED' : 'IDLE',
                    model: 'LayoutLMv3-5000-steps',
                    entities: extractedEntities || []
                  },
                  null,
                  2
                )}
              </pre>
            )}
          </div>

          {/* RAG Document Query Assistant */}
          <div className="flex-grow min-h-[340px]">
            <ChatBox documentId={documentId} extractedEntities={extractedEntities} />
          </div>

        </div>

      </main>
    </div>
  );
};

export default Workspace;