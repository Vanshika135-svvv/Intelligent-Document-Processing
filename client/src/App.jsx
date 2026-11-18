import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Workspace from './pages/Workspace';

function App() {
  // Global state for documents so Dashboard and Workspace stay in sync (SRS FR-101, FR-103)
  const [documents, setDocuments] = useState([
    {
      id: 'DOC-2026-1048',
      name: 'Tax_Invoice_Aegis_Tech.pdf',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '21 Oct 2026, 12:45 PM',
      status: 'Completed',
      confidence: 98.4,
      vendor: 'Aegis Technologies',
      invoiceNo: 'INV-2026-1048',
      date: '02 Oct 2026',
      total: '₹84,560.00'
    },
    {
      id: 'DOC-2026-1049',
      name: 'Retail_Receipt_SROIE_04.jpg',
      type: 'IMAGE',
      size: '840 KB',
      uploadDate: '21 Oct 2026, 01:15 PM',
      status: 'Completed',
      confidence: 96.1,
      vendor: 'Popular Book Co.',
      invoiceNo: 'REC-88392',
      date: '19 Oct 2026',
      total: '₹1,450.00'
    },
    {
      id: 'DOC-2026-1050',
      name: 'Purchase_Order_Scan_09.pdf',
      type: 'PDF',
      size: '3.2 MB',
      uploadDate: '21 Oct 2026, 02:10 PM',
      status: 'Processing',
      confidence: null,
      vendor: 'Detecting...',
      invoiceNo: '---',
      date: '---',
      total: '---'
    }
  ]);

  const addProcessedDocument = (newDoc) => {
    setDocuments((prev) => [newDoc, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#f8f9ff] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
        <Routes>
          {/* 1. Landing Page (Matches your exact screenshot!) */}
          <Route path="/" element={<LandingPage />} />

          {/* 2. Authentication Page (Login / Sign Up - SRS 3.1 & FR-101) */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage defaultMode="signup" />} />

          {/* 3. Main Dashboard (Document Management, Status & Monitoring - SRS 4.1 & 4.7) */}
          <Route 
            path="/dashboard" 
            element={<Dashboard documents={documents} />} 
          />

          {/* 4. IDP Workspace Engine (Upload, Spatial OCR Bounding Boxes, Tables, JSON, RAG Chat - SRS 4.2-4.6) */}
          <Route 
            path="/workspace" 
            element={<Workspace onDocumentProcessed={addProcessedDocument} />} 
          />

          {/* Catch-all redirects to Landing Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;