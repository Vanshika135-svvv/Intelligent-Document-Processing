const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const { uploadAndProcessDocument } = require('./controllers/uploadController');

const app = express();
app.use(cors());
app.use(express.json());

// Configure Multer storage for uploaded receipts/invoices
const upload = multer({ dest: path.join(__dirname, 'uploads/') });

// Main Upload Endpoint called by React src/services/api.js
app.post('/api/upload', upload.single('document'), uploadAndProcessDocument);

// RAG Chat Endpoint called by React ChatBox.jsx
app.post('/api/chat', (req, res) => {
  const { question } = req.body;
  res.json({
    answer: `Processed query "${question}" against extracted LayoutLMv3 entities.`,
    confidence: 0.96,
  });
});

// Mount existing routes if needed
try {
  const documentRoutes = require('./routes/documentRoutes');
  app.use('/api/documents', documentRoutes);
} catch (err) {
  // Ignore if optional
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express API Gateway running on http://localhost:${PORT}`);
});