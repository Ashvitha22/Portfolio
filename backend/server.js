const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Basic route

app.get('/', (req, res) => {
  res.send('Backend is working!!!');
});


// Test POST route
app.post('/test', (req, res) => {
  const data = req.body;
  res.json({ message: 'Received data', data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const connectDB = require('./config/db');
connectDB(); // Connect to DB