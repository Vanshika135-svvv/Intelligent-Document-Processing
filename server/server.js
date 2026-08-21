const express = require('express');
const cors = require('cors');
// Import Routes
const documentRoutes = require('./routes/documentRoutes');
require('dotenv').config();
const connectDB = require('./config/db'); // Import the DB connection

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// Use Routes
app.use('/api/docs', documentRoutes);
// Basic Health Check Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'Success', 
        message: 'IDP Express API Gateway is running.' 
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});