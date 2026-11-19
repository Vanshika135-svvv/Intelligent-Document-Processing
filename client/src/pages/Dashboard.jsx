import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import IDPWorkspace from '../components/IDPWorkspace';

function extractCurrencyAndAmount(val) {
  if (!val || typeof val !== 'string') {
    return { currency: 'USD', amount: 0, raw: val || '—' };
  }
  const trimmed = val.trim();
  let currency = 'USD';
  if (trimmed.includes('NZD')) currency = 'NZD';
  else if (trimmed.includes('₹') || trimmed.toUpperCase().includes('INR')) currency = 'INR';
  else if (trimmed.includes('$') || trimmed.toUpperCase().includes('USD')) currency = 'USD';

  const cleaned = trimmed.replace(/[^0-9.]/g, '');
  const amount = parseFloat(cleaned);
  return {
    currency,
    amount: Number.isNaN(amount) ? 0 : amount,
    raw: trimmed
  };
}

export default function Dashboard({ documents = [], onDocumentProcessed }) {
  const [activeTab, setActiveTab] = useState('workspace');
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const openDocumentInWorkspace = (doc) => {
    setSelectedDoc(doc);
    setActiveTab('workspace');
  };

  const startNewExtraction = () => {
    setSelectedDoc(null);
    setActiveTab('workspace');
  };

  const defaultDocs = useMemo(
    () => [
      {
        id: 'DOC-2026-1048',
        name: 'real bills.jpg',
        type: 'IMAGE',
        size: '1.4 MB',
        uploadDate: '19 Nov 2026',
        status: 'Completed',
        confidence: 99.0,
        vendor: 'El Chalan Restaurant (Miami, FL)',
        date: '3/12/2016 1:13:51 PM',
        total: '$49.52'
      },
      {
        id: 'DOC-2026-1049',
        name: 'receipt-1.webp',
        type: 'IMAGE',
        size: '840 KB',
        uploadDate: '19 Nov 2026',
        status: 'Completed',
        confidence: 98.8,
        vendor: 'Corporate Cabs Limit (Auckland, NZ)',
        date: '30JUN2024 00:48',
        total: 'NZD$197.57'
      },
      {
        id: 'DOC-2026-1050',
        name: 'realbillrecipetjpg.jpg',
        type: 'IMAGE',
        size: '920 KB',
        uploadDate: '19 Nov 2026',
        status: 'Completed',
        confidence: 99.0,
        vendor: 'BRAND NAME (Cash Receipt)',
        date: '26/01/2023 07:45:33 AM',
        total: '$281.20'
      },
      {
        id: 'DOC-2026-1051',
        name: 'bills.jpg',
        type: 'IMAGE',
        size: '1.1 MB',
        uploadDate: '19 Nov 2026',
        status: 'Completed',
        confidence: 98.9,
        vendor: 'SHOP NAME',
        date: '04-05-2024 03.08 PM',
        total: '$76.00'
      },
      {
        id: 'DOC-2026-1052',
        name: 'samplebill.jpg',
        type: 'IMAGE',
        size: '1.0 MB',
        uploadDate: '19 Nov 2026',
        status: 'Completed',
        confidence: 99.1,
        vendor: 'RECEIPT (Terminal#2)',
        date: '09-10-2018 10:49AM',
        total: '$74.88'
      }
    ],
    []
  );

  const [localDocs, setLocalDocs] = useState(
    documents.length > 0 ? documents : defaultDocs
  );

  useEffect(() => {
    if (documents.length > 0) {
      setLocalDocs(documents);
    }
  }, [documents]);

  const handleDocumentAdded = (newDoc) => {
    setLocalDocs((prev) => [newDoc, ...prev]);
    if (onDocumentProcessed) {
      onDocumentProcessed(newDoc);
    }
  };

  const handleDeleteDocument = (docId) => {
    setLocalDocs((prev) => prev.filter((item) => item.id !== docId));
    if (selectedDoc?.id === docId) {
      setSelectedDoc(null);
    }
  };

  const docList = localDocs;

  const filteredDocs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return docList;
    return docList.filter(
      (d) =>
        (d.name || '').toLowerCase().includes(q) ||
        (d.vendor || '').toLowerCase().includes(q) ||
        (d.total || '').toLowerCase().includes(q)
    );
  }, [docList, searchQuery]);

  const currencySummary = useMemo(() => {
    const totals = { USD: 0, NZD: 0, INR: 0 };
    docList.forEach((d) => {
      const { currency, amount } = extractCurrencyAndAmount(d.total);
      totals[currency] = (totals[currency] || 0) + amount;
    });
    return totals;
  }, [docList]);

  const avgConfidence =
    docList.length > 0
      ? (
          docList.reduce((sum, d) => sum + (parseFloat(d.confidence) || 98.5), 0) /
          docList.length
        ).toFixed(1)
      : '99.0';

  const handleDownloadCsvReport = () => {
    const headers = [
      'Document ID',
      'File Name',
      'Type',
      'Merchant',
      'Date',
      'Total',
      'Confidence',
      'Status'
    ];
    const rows = docList.map((d) => [
      d.id || '',
      `"${(d.name || '').replace(/"/g, '""')}"`,
      d.type || 'IMAGE',
      `"${(d.vendor || '').replace(/"/g, '""')}"`,
      `"${(d.date || '').replace(/"/g, '""')}"`,
      `"${(d.total || '').replace(/"/g, '""')}"`,
      d.confidence ?? '',
      d.status || 'Completed'
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'extracted_receipts_report.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPdfStatement = () => {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFillColor(30, 27, 75);
    doc.rect(0, 0, pageWidth, 118, 'F');

    doc.setFillColor(79, 70, 229);
    doc.rect(0, 114, pageWidth, 4, 'F');

    doc.setTextColor(165, 180, 252);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('DOCUPULSE AI  •  EXTRACTED RECEIPT STATEMENT', 40, 38);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('Bill & Expense Summary', 40, 64);

    doc.setTextColor(203, 213, 225);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(
      `Prepared for: Vanshika Tiwari   |   Generated: 19 Nov 2026   |   Avg Confidence: ${avgConfidence}%`,
      40,
      88
    );

    doc.setFillColor(49, 46, 129);
    doc.roundedRect(pageWidth - 145, 36, 105, 54, 8, 8, 'F');
    doc.setTextColor(199, 210, 254);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL RECEIPTS', pageWidth - 132, 54);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text(String(docList.length), pageWidth - 132, 78);

    const summaryParts = [];
    if (currencySummary.USD > 0) summaryParts.push(`USD: $${currencySummary.USD.toFixed(2)}`);
    if (currencySummary.NZD > 0) summaryParts.push(`NZD: NZD$${currencySummary.NZD.toFixed(2)}`);
    if (currencySummary.INR > 0) summaryParts.push(`INR: Rs. ${currencySummary.INR.toFixed(2)}`);

    let cursorY = 142;
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(40, cursorY - 14, pageWidth - 80, 32, 6, 6, 'FD');

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(
      `Currency Totals   •   ${summaryParts.join('    |    ') || 'No amounts recorded'}`,
      52,
      cursorY + 5
    );

    cursorY += 34;

    const tableBody = docList.map((item, index) => [
      `#${index + 1}`,
      item.vendor || '—',
      item.name || '—',
      item.date || '—',
      `${item.confidence ?? '99.0'}%`,
      String(item.total || '—').replace('₹', 'Rs. ')
    ]);

    autoTable(doc, {
      startY: cursorY,
      margin: { left: 40, right: 40 },
      head: [['#', 'Merchant / Header', 'Source File', 'Date', 'Conf.', 'Amount']],
      body: tableBody,
      theme: 'grid',
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: [241, 245, 249],
        fontSize: 9,
        fontStyle: 'bold',
        cellPadding: 8
      },
      bodyStyles: {
        fontSize: 9,
        textColor: [30, 41, 59],
        cellPadding: 8,
        lineColor: [226, 232, 240],
        lineWidth: 0.6
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      columnStyles: {
        0: { cellWidth: 34, halign: 'center', fontStyle: 'bold', textColor: [79, 70, 229] },
        1: { cellWidth: 155, fontStyle: 'bold', textColor: [15, 23, 42] },
        2: { cellWidth: 112, textColor: [71, 85, 105] },
        3: { cellWidth: 112, textColor: [71, 85, 105] },
        4: { cellWidth: 46, halign: 'center', textColor: [4, 120, 87], fontStyle: 'bold' },
        5: { cellWidth: 62, halign: 'right', fontStyle: 'bold', textColor: [5, 150, 105] }
      }
    });

    const finalY = doc.lastAutoTable?.finalY ? doc.lastAutoTable.finalY + 26 : 680;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'Generated automatically by DocuPulse AI Intelligent Document Processing Workspace.',
      40,
      Math.min(finalY, doc.internal.pageSize.getHeight() - 36)
    );

    doc.save('DocuPulse_Receipt_Statement.pdf');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-slate-900/95 border-r border-slate-800/90 p-5 flex flex-col justify-between min-h-screen">
        <div className="space-y-6">
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-1 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-indigo-600/30 group-hover:bg-indigo-500 transition">
              IDP
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight block leading-none">
                DocuPulse AI
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Smart Receipt & Doc Hub
              </span>
            </div>
          </div>

          <nav className="space-y-1 text-xs font-medium">
            <button
              type="button"
              onClick={startNewExtraction}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition ${
                activeTab === 'workspace' && !selectedDoc
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <span>New Extraction</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-white">
                Upload
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('documents')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition ${
                activeTab === 'documents'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <span>My Documents</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 tabular-nums">
                {docList.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('insights')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition ${
                activeTab === 'insights'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <span>Spend Insights</span>
              <span className="text-[10px] text-emerald-400 font-semibold tabular-nums">
                CSV Ready
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('statement')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition ${
                activeTab === 'statement'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <span>PDF Statement</span>
              <span className="text-[10px] text-indigo-300 font-semibold">Download</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (!selectedDoc && docList.length > 0) {
                  setSelectedDoc(docList[0]);
                }
                setActiveTab('workspace');
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition ${
                activeTab === 'workspace' && selectedDoc
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <span>Ask About Doc (RAG)</span>
            </button>
          </nav>

          <div className="bg-slate-950/90 border border-slate-800/90 rounded-xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Processed Files</span>
              <span className="font-semibold text-white tabular-nums">{docList.length}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Avg. Confidence</span>
              <span className="font-semibold text-emerald-400 tabular-nums">{avgConfidence}%</span>
            </div>
            <button
              type="button"
              onClick={handleDownloadPdfStatement}
              className="w-full mt-1 py-1.5 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 text-xs font-semibold transition text-center"
            >
              Download PDF Statement
            </button>
          </div>
        </div>

        <div className="pt-4 mt-6 border-t border-slate-800/90 space-y-2.5">
          <div className="flex items-center gap-2.5 px-1">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0">
              VT
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">Vanshika Tiwari</p>
              <p className="text-[11px] text-emerald-400">● Active</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition text-center"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Right Panel */}
      <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-y-auto">
        {activeTab === 'workspace' && (
          <IDPWorkspace
            embedded={true}
            initialDocument={selectedDoc}
            onDocumentProcessed={handleDocumentAdded}
          />
        )}

        {activeTab === 'documents' && (
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">My Documents</h1>
                <p className="text-xs text-slate-400 mt-1">
                  Open any receipt or PDF in the workspace, or delete items you no longer need.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleDownloadCsvReport}
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition"
                >
                  Export CSV
                </button>
                <button
                  type="button"
                  onClick={startNewExtraction}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
                >
                  + New Extraction
                </button>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-xs text-slate-400 bg-slate-950/50">
                    <th className="py-3.5 px-5 font-medium">Document</th>
                    <th className="py-3.5 px-5 font-medium">Merchant / Header</th>
                    <th className="py-3.5 px-5 font-medium">Date</th>
                    <th className="py-3.5 px-5 font-medium">Total</th>
                    <th className="py-3.5 px-5 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {docList.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-3.5 px-5 font-semibold text-white">{doc.name}</td>
                      <td className="py-3.5 px-5 text-slate-300">{doc.vendor || '—'}</td>
                      <td className="py-3.5 px-5 text-slate-400 tabular-nums">{doc.date || '—'}</td>
                      <td className="py-3.5 px-5 font-semibold text-emerald-300 tabular-nums">
                        {doc.total || '—'}
                      </td>
                      <td className="py-3.5 px-5 text-right space-x-3 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => openDocumentInWorkspace(doc)}
                          className="text-indigo-400 hover:text-indigo-300 font-semibold"
                        >
                          Open in Workspace
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteDocument(doc.id)}
                          className="text-rose-400 hover:text-rose-300 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {docList.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-500">
                        No documents remaining. Click "+ New Extraction" to upload a receipt or PDF.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Spend & Receipt Insights
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Totals grouped by currency, live search across bills, and CSV export.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDownloadCsvReport}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
              >
                Download CSV Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <span className="text-xs font-medium text-slate-400">Documents Tracked</span>
                <p className="text-2xl font-bold text-white mt-1.5 tabular-nums">
                  {docList.length} Files
                </p>
                <p className="text-xs text-slate-400 mt-1">Synced with your workspace</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <span className="text-xs font-medium text-slate-400">Totals by Currency</span>
                <div className="mt-2 space-y-1 text-xs tabular-nums">
                  {currencySummary.USD > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">USD ($)</span>
                      <span className="font-bold text-emerald-300">
                        ${currencySummary.USD.toFixed(2)}
                      </span>
                    </div>
                  )}
                  {currencySummary.NZD > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">NZD</span>
                      <span className="font-bold text-sky-300">
                        NZD${currencySummary.NZD.toFixed(2)}
                      </span>
                    </div>
                  )}
                  {currencySummary.INR > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">INR (₹)</span>
                      <span className="font-bold text-amber-300">
                        ₹{currencySummary.INR.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <span className="text-xs font-medium text-slate-400">Extraction Confidence</span>
                <p className="text-2xl font-bold text-indigo-300 mt-1.5 tabular-nums">
                  {avgConfidence}%
                </p>
                <p className="text-xs text-slate-400 mt-1">Average field accuracy</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-white">
                  Merchant & Amount Breakdown ({filteredDocs.length})
                </h2>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by merchant, file name, or amount..."
                  className="w-full sm:w-72 bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="divide-y divide-slate-800/80 text-xs">
                {filteredDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="py-3 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div>
                      <p className="font-semibold text-white">{doc.vendor || doc.name}</p>
                      <p className="text-slate-400 mt-0.5">
                        {doc.name} • {doc.date || 'Date extracted'}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-emerald-300 tabular-nums">
                        {doc.total}
                      </span>
                      <button
                        type="button"
                        onClick={() => openDocumentInWorkspace(doc)}
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                      >
                        Inspect →
                      </button>
                    </div>
                  </div>
                ))}
                {filteredDocs.length === 0 && (
                  <p className="py-6 text-center text-slate-500">
                    No matching receipts or documents found for "{searchQuery}".
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'statement' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  PDF Receipt Statement
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Remove unwanted rows or download a formatted PDF summary of your receipts and PDFs.
                </p>
              </div>
              <button
                type="button"
                onClick={handleDownloadPdfStatement}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition shadow-sm shadow-indigo-600/30"
              >
                Download PDF Statement
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-indigo-300">
                    DocuPulse AI PDF Export
                  </span>
                  <h2 className="text-lg font-bold text-white mt-0.5">
                    Extracted Bills & Receipts Summary
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Prepared for: Vanshika Tiwari • Generated: 19 Nov 2026
                  </p>
                </div>
                <div className="text-right text-xs tabular-nums">
                  <p className="text-slate-400">Total Records</p>
                  <p className="text-lg font-bold text-white">{docList.length}</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2.5 px-3 font-medium">Merchant / Header</th>
                      <th className="py-2.5 px-3 font-medium">Source File</th>
                      <th className="py-2.5 px-3 font-medium">Date</th>
                      <th className="py-2.5 px-3 font-medium text-right">Amount</th>
                      <th className="py-2.5 px-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70">
                    {docList.map((doc) => (
                      <tr key={doc.id}>
                        <td className="py-3 px-3 font-semibold text-white">
                          {doc.vendor || '—'}
                        </td>
                        <td className="py-3 px-3 text-slate-300">{doc.name}</td>
                        <td className="py-3 px-3 text-slate-400 tabular-nums">
                          {doc.date || '—'}
                        </td>
                        <td className="py-3 px-3 text-right font-semibold text-emerald-300 tabular-nums">
                          {doc.total || '—'}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            type="button"
                            onClick={() => handleDeleteDocument(doc.id)}
                            className="text-rose-400 hover:text-rose-300 font-semibold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 tabular-nums">
                <span>Average Extraction Confidence: {avgConfidence}%</span>
                <div className="flex flex-wrap gap-4">
                  {currencySummary.USD > 0 && (
                    <span>USD Total: ${currencySummary.USD.toFixed(2)}</span>
                  )}
                  {currencySummary.NZD > 0 && (
                    <span>NZD Total: NZD${currencySummary.NZD.toFixed(2)}</span>
                  )}
                  {currencySummary.INR > 0 && (
                    <span>INR Total: ₹{currencySummary.INR.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}