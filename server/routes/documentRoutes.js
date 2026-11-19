const express = require('express');
const router = express.Router();
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const formData = new FormData();
        formData.append('file', fs.createReadStream(req.file.path), req.file.originalname);

        // Forward to Python FastAPI Engine running on port 8000
        const aiResponse = await axios.post('http://localhost:8000/api/extract', formData, {
            headers: formData.getHeaders()
        });

        // Clean up local temp file
        fs.unlinkSync(req.file.path);

        res.json(aiResponse.data);
    } catch (err) {
        console.error('Extraction bridge error:', err.message);
        res.status(500).json({ error: 'AI Inference Engine communication failed', details: err.message });
    }
});

router.post('/rag', async (req, res) => {
    try {
        const { question } = req.body;
        const aiResponse = await axios.post('http://localhost:8000/api/rag-query', { question });
        res.json(aiResponse.data);
    } catch (err) {
        res.status(500).json({ error: 'RAG query failed' });
    }
});

module.exports = router;