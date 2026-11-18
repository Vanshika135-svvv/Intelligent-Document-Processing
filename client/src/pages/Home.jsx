import React from "react";

function Home({ onGetStarted }) {
  return (
    <div className="landing-page">

      {/* Background decoration */}
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-grid"></div>

      {/* ================= NAVBAR ================= */}
      <nav className="landing-navbar">

        <div className="landing-brand">
          <div className="brand-logo">
            ID
          </div>

          <div className="brand-text">
            <strong>IDP</strong>
            <span>Document Intelligence</span>
          </div>
        </div>

        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#about">About</a>
        </div>

        <div className="navbar-actions">
          <button
            className="nav-login"
            onClick={() => onGetStarted("login")}
          >
            Login
          </button>

          <button
            className="nav-signup"
            onClick={() => onGetStarted("signup")}
          >
            Sign Up
          </button>
        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            Layout-Aware Document Intelligence
          </div>

          <h1>
            Make your
            <span className="gradient-text">
              documents intelligent.
            </span>
          </h1>

          <p className="hero-description">
            Upload complex documents, understand their layout,
            extract structured information, and ask questions
            directly from your documents.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-hero-btn"
              onClick={() => onGetStarted("login")}
            >
              Get Started
              <span>→</span>
            </button>

            <button
              className="secondary-hero-btn"
              onClick={() => onGetStarted("login")}
            >
              Explore Dashboard
            </button>

          </div>

          {/* Hero statistics */}
          <div className="hero-stats">

            <div className="hero-stat">
              <strong>96.8%</strong>
              <span>Demo Accuracy</span>
            </div>

            <div className="stat-divider"></div>

            <div className="hero-stat">
              <strong>5-Step</strong>
              <span>Processing Pipeline</span>
            </div>

            <div className="stat-divider"></div>

            <div className="hero-stat">
              <strong>JSON</strong>
              <span>Structured Output</span>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="visual-glow"></div>

          <div className="document-window">

            {/* Window top bar */}
            <div className="window-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="window-title">
                IDP Processing Preview
              </span>

              <div className="window-status">
                ● Live
              </div>

            </div>


            {/* Document */}
            <div className="document-paper">

              <div className="invoice-header">

                <div>
                  <div className="invoice-label">
                    TAX INVOICE
                  </div>

                  <div className="invoice-company">
                    AEGIS TECHNOLOGIES
                  </div>
                </div>

                <div className="invoice-icon">
                  IN
                </div>

              </div>


              <div className="invoice-line"></div>


              {/* Key values */}
              <div className="invoice-details">

                <div className="invoice-detail">
                  <span>Invoice Number</span>
                  <strong>INV-2026-1048</strong>
                </div>

                <div className="invoice-detail">
                  <span>Invoice Date</span>
                  <strong>02 Oct 2026</strong>
                </div>

                <div className="invoice-detail">
                  <span>Vendor</span>
                  <strong>Aegis Technologies</strong>
                </div>

              </div>


              {/* Table */}
              <div className="invoice-table">

                <div className="invoice-table-head">
                  <span>Product</span>
                  <span>Qty</span>
                  <span>Price</span>
                  <span>Total</span>
                </div>

                <div className="invoice-table-row">
                  <span>Document Processing</span>
                  <span>1</span>
                  <span>₹45,000</span>
                  <span>₹45,000</span>
                </div>

                <div className="invoice-table-row">
                  <span>AI Extraction Module</span>
                  <span>1</span>
                  <span>₹25,000</span>
                  <span>₹25,000</span>
                </div>

                <div className="invoice-table-row">
                  <span>Integration Support</span>
                  <span>1</span>
                  <span>₹14,560</span>
                  <span>₹14,560</span>
                </div>

              </div>


              {/* Total */}
              <div className="invoice-total">

                <span>Total Amount</span>

                <strong>
                  ₹84,560
                </strong>

              </div>

            </div>


            {/* Floating cards */}

            <div className="floating-card layout-card">

              <div className="floating-icon purple-icon">
                ✦
              </div>

              <div>
                <strong>Layout Detected</strong>
                <span>Tables & key-values</span>
              </div>

              <div className="floating-check">
                ✓
              </div>

            </div>


            <div className="floating-card ocr-card">

              <div className="floating-icon blue-icon">
                ◎
              </div>

              <div>
                <strong>Spatial OCR</strong>
                <span>96.8% confidence</span>
              </div>

              <div className="confidence-circle">
                96
              </div>

            </div>


            <div className="json-floating">

              <span className="json-symbol">
                {"{}"}
              </span>

              <div>
                <strong>Structured JSON</strong>
                <span>Ready for querying</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section
        className="features-section"
        id="features"
      >

        <div className="section-heading">

          <span className="section-label">
            WHAT IDP CAN DO
          </span>

          <h2>
            Understand documents beyond
            <span> simple text extraction.</span>
          </h2>

          <p>
            IDP combines document layout analysis, spatial OCR,
            structured data extraction and document querying.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-number">
              01
            </div>

            <div className="feature-icon purple-feature">
              ▦
            </div>

            <h3>
              Understand Layout
            </h3>

            <p>
              Detect tables, headings, paragraphs,
              key-value regions and other structural
              elements in your document.
            </p>

            <div className="feature-link">
              Layout Analysis →
            </div>

          </div>


          <div className="feature-card">

            <div className="feature-number">
              02
            </div>

            <div className="feature-icon blue-feature">
              ◎
            </div>

            <h3>
              Extract Information
            </h3>

            <p>
              Extract text together with its positional
              information using spatial OCR while
              preserving document relationships.
            </p>

            <div className="feature-link">
              Spatial OCR →
            </div>

          </div>


          <div className="feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="feature-icon green-feature">
              {"{}"}
            </div>

            <h3>
              Structure Data
            </h3>

            <p>
              Convert extracted information into
              structured JSON that can be stored,
              queried and consumed by applications.
            </p>

            <div className="feature-link">
              Structured JSON →
            </div>

          </div>


          <div className="feature-card">

            <div className="feature-number">
              04
            </div>

            <div className="feature-icon orange-feature">
              ?
            </div>

            <h3>
              Ask Questions
            </h3>

            <p>
              Interact with processed documents and
              retrieve relevant information through
              document-based question answering.
            </p>

            <div className="feature-link">
              Document Q&A →
            </div>

          </div>

        </div>

      </section>


      {/* ================= WORKFLOW ================= */}
      <section
        className="workflow-section"
        id="workflow"
      >

        <div className="section-heading">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            From PDF to
            <span> structured knowledge.</span>
          </h2>

          <p>
            A complete document processing pipeline designed
            to preserve both text and layout information.
          </p>

        </div>


        <div className="workflow-container">

          <div className="workflow-step">

            <div className="workflow-icon">
              01
            </div>

            <h3>
              Upload
            </h3>

            <p>
              Upload your PDF document securely.
            </p>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          <div className="workflow-step">

            <div className="workflow-icon">
              02
            </div>

            <h3>
              Analyze
            </h3>

            <p>
              Identify document layout and regions.
            </p>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          <div className="workflow-step">

            <div className="workflow-icon">
              03
            </div>

            <h3>
              Extract
            </h3>

            <p>
              Extract text and spatial information.
            </p>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          <div className="workflow-step">

            <div className="workflow-icon">
              04
            </div>

            <h3>
              Structure
            </h3>

            <p>
              Generate structured document data.
            </p>

          </div>


          <div className="workflow-arrow">
            →
          </div>


          <div className="workflow-step">

            <div className="workflow-icon">
              05
            </div>

            <h3>
              Query
            </h3>

            <p>
              Ask questions about your document.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section
        className="cta-section"
        id="about"
      >

        <div className="cta-content">

          <div className="cta-icon">
            ✦
          </div>

          <h2>
            Ready to make your documents smarter?
          </h2>

          <p>
            Start processing your first document with
            the Intelligent Document Processing platform.
          </p>

          <button
            className="primary-hero-btn"
            onClick={() => onGetStarted("login")}
          >
            Open IDP Workspace
            <span>→</span>
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="landing-footer">

        <div className="footer-brand">

          <div className="brand-logo">
            ID
          </div>

          <div>
            <strong>IDP</strong>
            <span>
              Intelligent Document Processing
            </span>
          </div>

        </div>

        <p>
          Layout-Aware Vision-Language Pipeline
        </p>

        <p className="footer-copy">
          © 2026 Aegis AI. Major Project.
        </p>

      </footer>

    </div>
  );
}

export default Home;