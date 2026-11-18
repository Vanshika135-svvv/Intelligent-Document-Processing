const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const AI_ENGINE_URL = process.env.AI_ENGINE_URL || 'http://127.0.0.1:8000';

exports.uploadAndProcessDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No document file uploaded' });
    }

    // Prepare multipart form-data for Python FastAPI Engine
    const formData = new FormData();
    formData.append('file', fs.createReadStream(req.file.path), req.file.originalname);

    // Send image to FastAPI (/extract)
    const aiResponse = await axios.post(`${AI_ENGINE_URL}/extract`, formData, {
      headers: {
        ...formData.getHeaders(),
      },
      maxBodyLength: Infinity,
    });

    const extractedData = aiResponse.data.extractedData || [];

    // Return the exact structure expected by Workspace.jsx
    return res.status(200).json({
      status: 'success',
      documentId: `DOC-${Date.now()}`,
      fileName: req.file.originalname,
      extractedData: extractedData,
    });
  } catch (error) {
    console.error('Error communicating with AI Engine:', error.message);
    return res.status(500).json({
      error: 'Failed to process document through AI Engine',
      details: error.response?.data || error.message,
    });
  }
};