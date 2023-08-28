// Load environment variables from .env file
require('dotenv').config();
// initialize express app 
const express = require("express");
const app = express();
// Require Routes (Functionality-Based Routing (e.g., /auth/login, /posts/create))
authRoutes = require('./routes/authRoutes')



// Middlewares 
// Use the built-in JSON middleware to parse JSON request bodies
app.use(express.json()); 
app.use('/auth' , authRoutes )



PORT = process.env.SERVER_PORT ;
app.listen(PORT , () => {
    console.log(`Server listening on port ${PORT}`);
});

