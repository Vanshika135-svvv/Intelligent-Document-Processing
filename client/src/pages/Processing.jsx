import React from "react";
import Sidebar from "../components/Sidebar";

function Processing({ onNavigate }) {

  const handleLogout = () => {
    localStorage.removeItem("idpUser");
    onNavigate("home");
  };

  return (
    <div className="dashboard-page">

      <Sidebar
        activePage="processing"
        onNavigate={onNavigate}
        onLogout={handleLogout}
      />

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <p className="page-label">AI DOCUMENT PIPELINE</p>
            <h1>Processing</h1>
          </div>
        </header>

        <section className="page-introduction">
          <h2>Document Processing</h2>
          <p>
            Monitor how your documents move through the intelligent
            document processing pipeline.
          </p>
        </section>

        {/* Current Processing */}
        <section className="processing-overview">

          <div className="processing-main-card">

            <div className="processing-file-heading">
              <div className="file-icon large">PDF</div>

              <div>
                <span>Currently Processing</span>
                <h2>Report_Q3.pdf</h2>
              </div>

              <span className="status processing-status">
                Processing
              </span>
            </div>

            <div className="progress-container">

              <div className="progress-label">
                <span>Overall Progress</span>
                <strong>65%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "65%" }}
                ></div>
              </div>

            </div>

          </div>

          <div className="processing-info-card">
            <span className="section-label">PROCESSING TIME</span>
            <strong>00:24</strong>
            <p>Estimated completion time</p>
          </div>

        </section>

        {/* Pipeline */}
        <section className="processing-pipeline-card">

          <div className="section-heading">
            <div>
              <span className="section-label">PIPELINE STATUS</span>
              <h2>Processing Stages</h2>
            </div>
          </div>

          <div className="large-pipeline">

            <div className="large-pipeline-step completed">
              <div className="large-pipeline-icon">✓</div>

              <div>
                <strong>PDF to Image</strong>
                <p>Document pages converted successfully.</p>
              </div>

              <span>Completed</span>
            </div>

            <div className="large-pipeline-step completed">
              <div className="large-pipeline-icon">✓</div>

              <div>
                <strong>Layout Analysis</strong>
                <p>
                  Tables, titles and paragraphs identified.
                </p>
              </div>

              <span>Completed</span>
            </div>

            <div className="large-pipeline-step active">
              <div className="large-pipeline-icon">◌</div>

              <div>
                <strong>Spatial OCR</strong>
                <p>
                  Extracting text and spatial coordinates.
                </p>
              </div>

              <span>Running</span>
            </div>

            <div className="large-pipeline-step">
              <div className="large-pipeline-icon">4</div>

              <div>
                <strong>Structured JSON</strong>
                <p>
                  Converting extracted information into JSON.
                </p>
              </div>

              <span>Pending</span>
            </div>

            <div className="large-pipeline-step">
              <div className="large-pipeline-icon">5</div>

              <div>
                <strong>MongoDB Storage</strong>
                <p>
                  Storing processed document information.
                </p>
              </div>

              <span>Pending</span>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Processing;