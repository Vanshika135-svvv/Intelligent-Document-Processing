import React from "react";

function DocumentCard({ document, openDocument }) {

  return (

    <div className="document-card">

      <div className="document-icon">
        PDF
      </div>


      <div className="flex-grow-1">

        <h5 className="mb-1">
          {document.fileName}
        </h5>

        <small className="text-muted">
          {document.date}
        </small>

      </div>


      <span className="badge bg-success-subtle text-success">
        {document.status}
      </span>


      <button
        className="btn btn-sm btn-outline-primary mt-3"
        onClick={() => openDocument(document)}
      >
        Open Document
      </button>

    </div>

  );
}

export default DocumentCard;