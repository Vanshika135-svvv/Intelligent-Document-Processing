# Intelligent Document Processing (IDP) Pipeline

An end-to-end Intelligent Document Processing system designed to extract structured data and spatial layout metadata from unstructured documents (PDFs, Images). 

This project bridges the gap between academic machine learning theory and scalable industry application by utilizing a distributed microservice architecture. It combines a robust API Gateway for data management with a GPU-accelerated AI inference engine.

---

## 🏛 Architecture Overview

The system operates on a monorepo structure containing two distinct microservices communicating over an HTTP bridge:

1. **API Gateway (Node.js/Express):** Handles client-side routing, file upload middleware (Multer), user authentication, and data persistence via MongoDB.
2. **AI Engine (Python/FastAPI):** A dedicated machine learning microservice (designed to run via Ngrok tunnel on GPU environments like Colab) that processes documents using state-of-the-art vision-language and layout models (e.g., Donut, LayoutLMv3) to return structured JSON.

---

## 🚀 Tech Stack

**Frontend (Client)**
* React.js (Vite)
* Tailwind CSS (Styling)

**Backend API Gateway (Server)**
* Node.js & Express.js
* MongoDB Atlas (Mongoose ORM)
* Multer (File Handling)
* Axios (Microservice bridging)

**AI Microservice (Engine)**
* Python 3 & FastAPI
* Uvicorn & Pyngrok
* Hugging Face Transformers
* PyTorch

---

## 👥 Team Aegis AI

* **Vanshika Tiwari** – Team Leader & Backend Developer
* **Dhanshri** – Project Collaborator
* **Harman** – Project Collaborator
* **Vaidika** – Project Collaborator

---

## 📂 Repository Structure

```text
Intelligent-Document-Processing/
├── client/                 # React UI (Frontend)
├── server/                 # Node.js API Gateway (Auth, DB, File Uploads)
├── ai-engine/              # Python FastAPI Microservice (ML Models, Inference)
├── .gitignore              
└── README.md
```
## ⚙️ Getting Started (Local Development)

### Prerequisites
* Node.js (v18+)
* Python (3.9+)
* MongoDB Atlas Cluster (or local instance)

### 1. Setup the Node.js API Gateway
Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```
Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
AI_ENGINE_URL=[http://127.0.0.1:8000](http://127.0.0.1:8000)
```
## 📡 Core API Endpoints

### Node.js Gateway
* `GET /api/health` - Verifies API Gateway status.
* `POST /api/docs/upload` - Accepts `multipart/form-data` (PDF/Images), creates a MongoDB record, and proxies the file to the AI engine.

### FastAPI AI Engine
* `GET /health` - Verifies AI microservice status.
* `POST /process-document` - Receives binary file data, runs inference models, and returns structured JSON (Text, Bounding Boxes, Entities).

---

## 🗺 Future Roadmap
* **Vector Embeddings:** Implement lightweight embedding generation (e.g., `all-MiniLM-L6-v2` or `ColPali`) for processed documents.
* **Semantic Search:** Leverage MongoDB Atlas Vector Search to allow natural language querying against extracted document data.
* **Retrieval-Augmented Generation (RAG):** Integrate an LLM to answer complex queries based on the document corpus.
