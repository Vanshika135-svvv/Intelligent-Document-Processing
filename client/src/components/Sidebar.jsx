import React from "react";

function Sidebar({ activePage, onNavigate, onLogout }) {
  return (
    <aside className="dashboard-sidebar">

      {/* Logo */}
      <div className="dashboard-logo">
        <div className="logo-icon">D</div>

        <div>
          <h2>IDP</h2>
          <span>Document Intelligence</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-navigation">

        <button
          className={`sidebar-item ${
            activePage === "dashboard" ? "active" : ""
          }`}
          onClick={() => onNavigate("dashboard")}
        >
          <span className="sidebar-icon">▦</span>
          <span>Dashboard</span>
        </button>

        <button
          className={`sidebar-item ${
            activePage === "documents" ? "active" : ""
          }`}
          onClick={() => onNavigate("documents")}
        >
          <span className="sidebar-icon">▤</span>
          <span>My Documents</span>
        </button>

        <button
          className={`sidebar-item ${
            activePage === "processing" ? "active" : ""
          }`}
          onClick={() => onNavigate("processing")}
        >
          <span className="sidebar-icon">◌</span>
          <span>Processing</span>
        </button>

        <button
          className={`sidebar-item ${
            activePage === "analytics" ? "active" : ""
          }`}
          onClick={() => onNavigate("analytics")}
        >
          <span className="sidebar-icon">◫</span>
          <span>Analytics</span>
        </button>

        <button
          className={`sidebar-item ${
            activePage === "settings" ? "active" : ""
          }`}
          onClick={() => onNavigate("settings")}
        >
          <span className="sidebar-icon">⚙</span>
          <span>Settings</span>
        </button>

      </nav>

      {/* Bottom */}
    <div className="sidebar-bottom">

  <div className="sidebar-help">
    <span className="help-question">?</span>
    <strong>Need Support</strong>
  </div>

  <button className="sidebar-logout" onClick={onLogout}>
    <span className="logout-icon">↪</span>
    <span>Logout</span>
  </button>

</div>

    </aside>
  );
}

export default Sidebar;