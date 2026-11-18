import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function MyDocuments({ onNavigate }) {
  const [search, setSearch] = useState("");

  const documents = [
    {
      name: "Invoice_2026.pdf",
      date: "02 Oct 2026",
      type: "Invoice",
      status: "Completed",
    },
    {
      name: "Report_Q3.pdf",
      date: "01 Oct 2026",
      type: "Report",
      status: "Processing",
    },
    {
      name: "Application_Form.pdf",
      date: "29 Sep 2026",
      type: "Form",
      status: "Completed",
    },
    {
      name: "Research_Paper.pdf",
      date: "26 Sep 2026",
      type: "Research",
      status: "Completed",
    },
    {
      name: "Financial_Report.pdf",
      date: "22 Sep 2026",
      type: "Report",
      status: "Completed",
    },
  ];

  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("idpUser");
    onNavigate("home");
  };

  return (
    <div className="dashboard-page">

      <Sidebar
        activePage="documents"
        onNavigate={onNavigate}
        onLogout={handleLogout}
      />

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <p className="page-label">DOCUMENT MANAGEMENT</p>
            <h1>My Documents</h1>
          </div>

          <button
            className="header-upload-button"
            onClick={() => onNavigate("dashboard")}
          >
            + Upload PDF
          </button>
        </header>

        <section className="page-introduction">
          <h2>Your Documents</h2>
          <p>
            View and manage all the documents processed through
            the Intelligent Document Processing system.
          </p>
        </section>

        {/* Search */}
        <section className="document-toolbar">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select className="filter-select">
            <option>All Documents</option>
            <option>Completed</option>
            <option>Processing</option>
          </select>

        </section>

        {/* Documents */}
        <section className="documents-page-card">

          <div className="documents-page-header">
            <div>
              <span className="section-label">DOCUMENT LIBRARY</span>
              <h2>{filteredDocuments.length} Documents</h2>
            </div>
          </div>

          <div className="documents-table">

            <div className="document-row document-header">
              <span>DOCUMENT</span>
              <span>TYPE</span>
              <span>DATE</span>
              <span>STATUS</span>
              <span>ACTION</span>
            </div>

            {filteredDocuments.map((document, index) => (
              <div className="document-row" key={index}>

                <div className="document-name">
                  <div className="file-icon">PDF</div>
                  <strong>{document.name}</strong>
                </div>

                <span>{document.type}</span>

                <span>{document.date}</span>

                <span
                  className={`status ${
                    document.status === "Completed"
                      ? "completed-status"
                      : "processing-status"
                  }`}
                >
                  {document.status}
                </span>

                <button
                  className="document-action"
                  onClick={() => alert(`Opening ${document.name}`)}
                >
                  View
                </button>

              </div>
            ))}

          </div>

        </section>

      </main>
    </div>
  );
}

export default MyDocuments;