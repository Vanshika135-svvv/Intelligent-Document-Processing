from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="IDP AI Engine", version="1.0")

# Enable CORS for local development and gateway integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {
        "status": "Success",
        "message": "FastAPI AI Microservice is ready for layout extraction."
    }

@app.post("/process-document")
async def process_document(file: UploadFile = File(...)):
    # Validate file type
    if not (file.filename.endswith(".pdf") or file.content_type.startswith("image/")):
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF and image files are supported.")

    # Read binary content
    file_bytes = await file.read()

    # Placeholder inference response representing layout and structured text extraction
    extracted_payload = {
        "fileName": file.filename,
        "fileSizeBytes": len(file_bytes),
        "status": "Completed",
        "extractedData": {
            "title": "Sample Extracted Document",
            "entities": [
                {"label": "INVOICE_NUMBER", "value": "INV-2026-001", "confidence": 0.98},
                {"label": "TOTAL_AMOUNT", "value": "$1,250.00", "confidence": 0.95}
            ],
            "tables": [
                {
                    "rows": 2,
                    "columns": 3,
                    "headers": ["Item", "Quantity", "Price"],
                    "data": [
                        ["Cloud Hosting", "1", "$250.00"],
                        ["ML Model", "1", "$1000.00"]
                    ]
                }
            ]
        },
        "layoutMetadata": {
            "boundingBoxes": [
                {"box": [50, 100, 200, 140], "type": "header"}
            ]
        }
    }

    return extracted_payload