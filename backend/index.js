// server/server.js
// Import necessary modules for the server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

// Create an Express application and set the port
const app = express();
const port = 5000;

// Middleware setup

// Enable Cross-Origin Resource Sharing (CORS) for handling requests from different origins
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Optional MongoDB connection code 
// Uncomment and configure if you want perform any crud operation
// mongoose.connect('mongodb://localhost:27017/mern_demo', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// Set up routes for user-related operations under the '/api' path
app.use('/api', userRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});