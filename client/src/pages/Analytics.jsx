import React from "react";
import Sidebar from "../components/Sidebar";

function Analytics({ onNavigate }) {

  const handleLogout = () => {
    localStorage.removeItem("idpUser");
    onNavigate("home");
  };

  return (
    <div className="dashboard-page">

      <Sidebar
        activePage="analytics"
        onNavigate={onNavigate}
        onLogout={handleLogout}
      />

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <p className="page-label">DOCUMENT INSIGHTS</p>
            <h1>Analytics</h1>
          </div>
        </header>

        <section className="page-introduction">
          <h2>Document Analytics</h2>
          <p>
            Get an overview of document processing activity.
          </p>
        </section>

        {/* Stats */}
        <section className="analytics-stats">

          <div className="analytics-card">
            <span>Total Documents</span>
            <strong>12</strong>
            <small>Documents uploaded</small>
          </div>

          <div className="analytics-card">
            <span>Processed</span>
            <strong>10</strong>
            <small>Successfully completed</small>
          </div>

          <div className="analytics-card">
            <span>Queries</span>
            <strong>36</strong>
            <small>Document queries</small>
          </div>

          <div className="analytics-card">
            <span>Processing</span>
            <strong>1</strong>
            <small>Currently active</small>
          </div>

        </section>

        {/* Charts */}
        <section className="analytics-grid">

          <div className="analytics-panel">

            <div className="section-heading">
              <div>
                <span className="section-label">
                  DOCUMENT ACTIVITY
                </span>
                <h2>Monthly Processing</h2>
              </div>
            </div>

            <div className="bar-chart">

              <div className="bar-column">
                <div className="bar" style={{ height: "35%" }}></div>
                <span>May</span>
              </div>

              <div className="bar-column">
                <div className="bar" style={{ height: "50%" }}></div>
                <span>Jun</span>
              </div>

              <div className="bar-column">
                <div className="bar" style={{ height: "42%" }}></div>
                <span>Jul</span>
              </div>

              <div className="bar-column">
                <div className="bar" style={{ height: "70%" }}></div>
                <span>Aug</span>
              </div>

              <div className="bar-column">
                <div className="bar" style={{ height: "82%" }}></div>
                <span>Sep</span>
              </div>

              <div className="bar-column">
                <div className="bar" style={{ height: "92%" }}></div>
                <span>Oct</span>
              </div>

            </div>

            <p className="demo-note">
              Demo analytics — values will be connected to
              backend data later.
            </p>

          </div>

          <div className="analytics-panel">

            <div className="section-heading">
              <div>
                <span className="section-label">
                  DOCUMENT TYPES
                </span>
                <h2>Distribution</h2>
              </div>
            </div>

            <div className="distribution-item">
              <div>
                <span>Reports</span>
                <strong>40%</strong>
              </div>

              <div className="distribution-bar">
                <div style={{ width: "40%" }}></div>
              </div>
            </div>

            <div className="distribution-item">
              <div>
                <span>Invoices</span>
                <strong>30%</strong>
              </div>

              <div className="distribution-bar">
                <div style={{ width: "30%" }}></div>
              </div>
            </div>

            <div className="distribution-item">
              <div>
                <span>Forms</span>
                <strong>20%</strong>
              </div>

              <div className="distribution-bar">
                <div style={{ width: "20%" }}></div>
              </div>
            </div>

            <div className="distribution-item">
              <div>
                <span>Other</span>
                <strong>10%</strong>
              </div>

              <div className="distribution-bar">
                <div style={{ width: "10%" }}></div>
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Analytics;