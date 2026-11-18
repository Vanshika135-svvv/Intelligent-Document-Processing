import React, { useState } from "react";

function Login({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Temporary frontend login
    localStorage.setItem("idpUser", email);

    if (onNavigate) {
      onNavigate("dashboard");
    }
  };

  return (
    <div className="auth-page">

      {/* Background */}
      <div className="auth-bg-orb auth-orb-one"></div>
      <div className="auth-bg-orb auth-orb-two"></div>
      <div className="auth-grid"></div>

      {/* Top logo */}
      <div className="auth-topbar">

        <button
          className="auth-brand"
          onClick={() => onNavigate && onNavigate("home")}
        >
          <div className="auth-brand-logo">
            ID
          </div>

          <div className="auth-brand-text">
            <strong>IDP</strong>
            <span>Document Intelligence</span>
          </div>
        </button>

        <button
          className="back-home-btn"
          onClick={() => onNavigate && onNavigate("home")}
        >
          ← Back to Home
        </button>

      </div>


      {/* Main content */}
      <div className="auth-container">

        {/* Left information */}
        <div className="auth-info">

          <div className="auth-badge">
            <span></span>
            Intelligent Document Processing
          </div>

          <h1>
            Turn your documents
            <span> into intelligence.</span>
          </h1>

          <p>
            Upload documents, extract structured information,
            understand layouts and interact with your documents
            through an intelligent processing workflow.
          </p>


          <div className="auth-benefits">

            <div className="auth-benefit">
              <div className="benefit-icon">
                ✓
              </div>

              <div>
                <strong>Layout-Aware Processing</strong>
                <p>
                  Understand tables, headings and document regions.
                </p>
              </div>
            </div>


            <div className="auth-benefit">
              <div className="benefit-icon">
                ✓
              </div>

              <div>
                <strong>Spatial OCR</strong>
                <p>
                  Extract text while preserving positional information.
                </p>
              </div>
            </div>


            <div className="auth-benefit">
              <div className="benefit-icon">
                ✓
              </div>

              <div>
                <strong>Structured Data</strong>
                <p>
                  Convert document information into structured JSON.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* Login card */}
        <div className="auth-card">

          <div className="auth-card-header">

            <div className="auth-card-icon">
              ⇥
            </div>

            <h2>
              Welcome back
            </h2>

            <p>
              Sign in to continue to your IDP workspace.
            </p>

          </div>


          <form onSubmit={handleLogin}>

            {/* Email */}
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


            {/* Password */}
            <div className="form-group">

              <div className="label-row">

                <label>
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-btn"
                  onClick={() =>
                    alert("Password recovery will be connected to the backend.")
                  }
                >
                  Forgot password?
                </button>

              </div>


              <div className="input-wrapper">

                <span className="input-icon">
                  ●
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Remember */}
            <div className="remember-row">

              <label className="remember-label">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {/* Login button */}
            <button
              type="submit"
              className="auth-submit-btn"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          {/* Divider */}
          <div className="auth-divider">
            <span>New to IDP?</span>
          </div>


          {/* Signup */}
          <button
            className="switch-auth-btn"
            onClick={() =>
              onNavigate && onNavigate("signup")
            }
          >
            Create an account
            <span>→</span>
          </button>


          <p className="auth-footer-note">
            By continuing, you agree to use the IDP platform
            for authorized document processing.
          </p>

        </div>

      </div>


      {/* Bottom */}
      <div className="auth-bottom">
        © 2026 Aegis AI · Intelligent Document Processing
      </div>

    </div>
  );
}

export default Login;