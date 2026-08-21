const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { uploadDocument } = require('../controllers/documentController');

// POST route: /api/docs/upload
// The 'upload.single('file')' part tells Multer to look for a file named "file" in the request
router.post('/upload', upload.single('file'), uploadDocument);

module.exports = router;