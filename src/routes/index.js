const express = require('express');
const router = express.Router();
const courseRoutes = require('./courseRoutes'); // Adjusted path

// Define a simple route
router.get('/', (req, res) => {
  console.log('Hello World');
  res.send('Welcome to the Node.js App!');
});

// Use the course routes
router.use('/courses', courseRoutes); // Mount course routes

// Export the router
module.exports = router;