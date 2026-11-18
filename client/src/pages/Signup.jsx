import React, { useState } from "react";

function Signup({ onNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Temporary frontend registration
    localStorage.setItem(
      "idpUser",
      JSON.stringify({
        name: name,
        email: email,
      })
    );

    alert("Account created successfully!");

    // Go to Login
    onNavigate("login");
  };

  return (
    <div className="auth-page">

      {/* Background */}
      <div className="auth-bg-orb auth-orb-one"></div>
      <div className="auth-bg-orb auth-orb-two"></div>
      <div className="auth-grid"></div>

      {/* ================= TOP BAR ================= */}

      <div className="auth-topbar">

        {/* IDP Logo */}
        <button
          type="button"
          className="auth-brand"
          onClick={() => onNavigate("home")}
        >
          <div className="auth-brand-logo">
            ID
          </div>

          <div className="auth-brand-text">
            <strong>IDP</strong>
            <span>Document Intelligence</span>
          </div>
        </button>

        {/* Back to Home */}
        <button
          type="button"
          className="back-home-btn"
          onClick={() => onNavigate("home")}
        >
          ← Back to Home
        </button>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="auth-container signup-layout">

        {/* ================= SIGNUP CARD ================= */}

        <div className="auth-card signup-card">

          <div className="auth-card-header">

            <div className="auth-card-icon">
              +
            </div>

            <h2>
              Create your account
            </h2>

            <p>
              Start exploring intelligent document processing.
            </p>

          </div>


          {/* FORM */}

          <form onSubmit={handleSignup}>

            {/* NAME */}

            <div className="form-group">

              <label>
                Full Name
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ◉
                </span>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  @
                </span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="form-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ●
                </span>

                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="form-group">

              <label>
                Confirm Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ●
                </span>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />

              </div>

            </div>


            {/* TERMS */}

            <label className="terms-row">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the platform terms and conditions.
              </span>

            </label>


            {/* CREATE ACCOUNT */}

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Create Account
              <span>→</span>
            </button>

          </form>


          {/* DIVIDER */}

          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>


          {/* SIGN IN */}

          <button
            type="button"
            className="switch-auth-btn"
            onClick={() => onNavigate("login")}
          >
            Sign in instead
            <span>→</span>
          </button>


          <p className="auth-footer-note">
            Your account will provide access to the IDP
            document processing workspace.
          </p>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="signup-info">

          <div className="signup-info-badge">
            ✦ IDP WORKSPACE
          </div>

          <h1>
            One workspace.
            <span>
              Complete document intelligence.
            </span>
          </h1>

          <p>
            Build a structured understanding of your documents
            using layout analysis, spatial OCR and intelligent
            document querying.
          </p>


          <div className="signup-feature-list">

            <div>
              <span>01</span>
              <strong>Upload PDF Documents</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Analyze Document Layout</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Extract Structured Information</strong>
            </div>

            <div>
              <span>04</span>
              <strong>Query Your Documents</strong>
            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER ================= */}

      <div className="auth-bottom">
        © 2026 Aegis AI · Intelligent Document Processing
      </div>

    </div>
  );
}

export default Signup;