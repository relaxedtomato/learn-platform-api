const express = require('express');
const courseController = require('../controllers/courseController'); // Ensure this path is correct

const router = express.Router();

// Define a route for course content
// router.get('/', (req, res) => {
//     console.log('courseRoutes');
//     return courseController(req, res);
// });

// Add a dynamic route for specific courses
router.get('/:slug', (req, res) => {
    console.log(`Fetching course for slug: ${req.params.slug}`);
    return courseController(req, res); // Call the same controller, passing the slug
});

// Export the router
module.exports = router;
