import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function Settings({ onNavigate }) {

  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("idpUser");
    onNavigate("home");
  };

  const handleSave = () => {
    alert("Settings saved successfully.");
  };

  return (
    <div className="dashboard-page">

      <Sidebar
        activePage="settings"
        onNavigate={onNavigate}
        onLogout={handleLogout}
      />

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <p className="page-label">ACCOUNT & PREFERENCES</p>
            <h1>Settings</h1>
          </div>
        </header>

        <section className="page-introduction">
          <h2>Settings</h2>
          <p>
            Manage your profile and application preferences.
          </p>
        </section>

        <section className="settings-grid">

          {/* Profile */}
          <div className="settings-card">

            <div className="settings-card-heading">
              <div>
                <span className="section-label">PROFILE</span>
                <h2>Personal Information</h2>
              </div>
            </div>

            <div className="profile-settings">

              <div className="large-profile-avatar">
                H
              </div>

              <div className="profile-fields">

                <label>
                  Full Name
                  <input
                    type="text"
                    value="Harman Kaur"
                    readOnly
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    value="harman@example.com"
                    readOnly
                  />
                </label>

                <label>
                  Account Type
                  <input
                    type="text"
                    value="Student"
                    readOnly
                  />
                </label>

              </div>

            </div>

          </div>

          {/* Preferences */}
          <div className="settings-card">

            <div className="settings-card-heading">
              <div>
                <span className="section-label">
                  PREFERENCES
                </span>
                <h2>Application Settings</h2>
              </div>
            </div>

            <div className="setting-option">

              <div>
                <strong>Email Notifications</strong>
                <p>
                  Receive updates about document processing.
                </p>
              </div>

              <button
                className={`toggle-button ${
                  notifications ? "on" : ""
                }`}
                onClick={() =>
                  setNotifications(!notifications)
                }
              >
                <span></span>
              </button>

            </div>

            <div className="setting-option">

              <div>
                <strong>Default Document Format</strong>
                <p>
                  Format used when uploading documents.
                </p>
              </div>

              <span className="setting-value">
                PDF
              </span>

            </div>

            <div className="setting-option">

              <div>
                <strong>Data Storage</strong>
                <p>
                  Processed information is stored securely.
                </p>
              </div>

              <span className="setting-value">
                MongoDB
              </span>

            </div>

          </div>

          {/* Security */}
          <div className="settings-card security-card">

            <div className="settings-card-heading">
              <div>
                <span className="section-label">
                  SECURITY
                </span>
                <h2>Account Security</h2>
              </div>
            </div>

            <div className="security-row">
              <div>
                <strong>Password</strong>
                <p>Last updated recently</p>
              </div>

              <button
                className="secondary-button"
                onClick={() =>
                  alert("Password change feature coming soon.")
                }
              >
                Change Password
              </button>
            </div>

          </div>

        </section>

        <button
          className="save-settings-button"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </main>
    </div>
  );
}

export default Settings;