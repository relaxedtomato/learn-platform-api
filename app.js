const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index'); // Adjusted path
const {connectDB} = require('./src/config/db'); // Keep this as is
const cors = require('cors'); // Added CORS import

const app = express();
const PORT = process.env.PORT || 3000;
const DOMAIN = process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost';

// Connect to the database
connectDB();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the router for handling routes
app.use('/', indexRouter);

// Custom CORS function to allow specific domain pattern
const allowedOrigins = [
  /^https:\/\/learn-platform-learn-platform-pr-\d+\.up\.railway\.app$/, // Updated regex pattern
  'learn-platform-staging.up.railway.app',
  'learn-platform-production.up.railway.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.some(pattern => pattern.test(origin))) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Block the request
    }
  }
}));

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at ${DOMAIN}:${PORT}/`);
});
