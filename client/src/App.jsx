import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Workspace from './pages/Workspace';
import WebsiteHelpBot from './components/WebsiteHelpBot';

function App() {
  // Global state for documents so Dashboard and Workspace stay in sync
  const [documents, setDocuments] = useState([
    {
      id: 'DOC-2026-1048',
      name: 'Tax_Invoice_Aegis_Tech.pdf',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '21 Oct 2026, 12:45 PM',
      status: 'Completed',
      confidence: 98.4,
      vendor: 'Aegis Technologies Pvt Ltd',
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
      vendor: 'Adobe Stock / Receipt',
      invoiceNo: 'REC-88392',
      date: '26/01/2023',
      total: '₹281.20'
    },
    {
      id: 'DOC-2026-1050',
      name: 'Purchase_Order_Scan_09.pdf',
      type: 'PDF',
      size: '3.2 MB',
      uploadDate: '21 Oct 2026, 02:10 PM',
      status: 'Processing',
      confidence: null,
      vendor: 'CloudScale Solutions',
      invoiceNo: 'PO-2026-09',
      date: '15 Oct 2026',
      total: '₹1,20,000.00'
    }
  ]);

  const addProcessedDocument = (newDoc) => {
    setDocuments((prev) => [newDoc, ...prev]);
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
        <Routes>
          {/* 1. Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />

          {/* 2. Authentication Page (Login / Sign Up) */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage defaultMode="signup" />} />

          {/* 3. Main Dashboard (Interactive Sidebar + Dynamic Right Panel) */}
          <Route
            path="/dashboard"
            element={
              <Dashboard
                documents={documents}
                onDocumentProcessed={addProcessedDocument}
              />
            }
          />

          {/* 4. Standalone IDP Workspace Engine */}
          <Route
            path="/workspace"
            element={<Workspace onDocumentProcessed={addProcessedDocument} />}
          />

          {/* Catch-all redirects to Landing Page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Global Floating Help Chatbot across all views */}
        <WebsiteHelpBot />
      </div>
    </Router>
  );
}

export default App;