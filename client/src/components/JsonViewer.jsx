import React from "react";

function JsonViewer({ data }) {

  return (

    <div>

      <div className="d-flex justify-content-between mb-3">

        <h4>
          Structured JSON
        </h4>

        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() =>
            navigator.clipboard.writeText(
              JSON.stringify(data, null, 2)
            )
          }
        >
          Copy JSON
        </button>

      </div>


      <pre className="json-viewer">

        {JSON.stringify(data, null, 2)}

      </pre>

    </div>

  );
}

export default JsonViewer;