const express = require('express');
const multer = require('multer');
const { uploadAndForward } = require('../controllers/uploadController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('document'), uploadAndForward);

module.exports = router;