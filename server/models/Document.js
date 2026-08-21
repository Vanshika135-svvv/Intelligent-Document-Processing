const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    originalFileName: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Processing', 'Completed', 'Failed'], default: 'Pending' },
    extractedData: { type: Object }, // This will hold the complex JSON from FastAPI
    layoutMetadata: { type: Object } // This holds the bounding boxes and spatial info
}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);