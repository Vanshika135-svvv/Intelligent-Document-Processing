const Document = require('../models/Document');

const uploadDocument = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        // 1. Save the initial document record to MongoDB with a "Pending" status
        const newDocument = new Document({
            originalFileName: req.file.originalname,
            status: 'Pending'
        });

        const savedDoc = await newDocument.save();

        // 2. Respond to the React UI immediately
        res.status(201).json({
            message: 'File uploaded successfully and saved to database.',
            documentId: savedDoc._id,
            fileName: savedDoc.originalFileName
        });

        // 3. (Next Step) Here is where we will trigger the function to send 
        // the file over the Ngrok tunnel to your Python FastAPI engine!

    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: 'Server error during upload.' });
    }
};

module.exports = {
    uploadDocument
};