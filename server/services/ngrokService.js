const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

/**
 * Sends a locally stored document file to the Python FastAPI engine for layout extraction.
 * @param {string} filePath - Absolute or relative path to the uploaded file on disk.
 * @returns {Promise<Object>} - The JSON response containing structured layout and text data.
 */
const sendToAiEngine = async (filePath) => {
    try {
        const aiEngineUrl = process.env.AI_ENGINE_URL || 'http://127.0.0.1:8000';
        const formData = new FormData();
        
        // Attach the file stream to the form payload
        formData.append('file', fs.createReadStream(filePath));

        const response = await axios.post(`${aiEngineUrl}/process-document`, formData, {
            headers: {
                ...formData.getHeaders(),
            },
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
        });

        return response.data;
    } catch (error) {
        console.error('Error forwarding document to AI engine:', error.message);
        throw new Error(error.response?.data?.detail || 'AI engine processing failed.');
    }
};

module.exports = {
    sendToAiEngine,
};