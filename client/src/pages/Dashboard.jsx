import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Dummy data representing MongoDB documents (FR-103)
  const documents = [
    { id: 1, name: 'Invoice_Q3_Vendor.pdf', size: '2.4 MB', date: 'Oct 20, 2026', status: 'Completed' },
    { id: 2, name: 'Purchase_Order_09.jpg', size: '1.1 MB', date: 'Oct 19, 2026', status: 'Processing' },
    { id: 3, name: 'Scanned_Receipt_11.pdf', size: '3.5 MB', date: 'Oct 15, 2026', status: 'Failed' },
  ];

  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Documents</h1>
          <p className="text-slate-500">Manage and view your extracted data</p>
        </div>
        <Link to="/workspace" className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 shadow-md transition">
          + New Extraction
        </Link>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
              <th className="p-4">Document Name</th>
              <th className="p-4">Size</th>
              <th className="p-4">Upload Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-4 font-medium text-slate-800">{doc.name}</td>
                <td className="p-4 text-slate-500 text-sm">{doc.size}</td>
                <td className="p-4 text-slate-500 text-sm">{doc.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    doc.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    doc.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {doc.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-indigo-600 text-sm font-medium hover:underline">View Results</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;