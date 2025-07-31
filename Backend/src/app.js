const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Middleware
app.use(cors()); // Allow frontend to connect (especially during local development)
app.use(express.json());

// Routes
app.use('/ai', aiRoutes);

// Health Check / Root Endpoint
app.get('/', (req, res) => {
  res.send("✅ AI Code Reviewer Backend is Running");
});

module.exports = app;
