// require modules 
// Load environment variables from .env file (env variable is useless here )
const env = require('dotenv').config();
const session = require('express-session');
const express = require("express");
const pgSession = require('connect-pg-simple')(session);
const pgPool = require('./config/database') 




// initialize express app 
const app = express();
// Require Routes (Functionality-Based Routing (e.g., /auth/login, /posts/create))
authRoutes = require('./routes/authRoutes')




// Middlewares 
// Use the built-in JSON middleware to parse JSON request bodies
app.use(express.json()); 
/*app.use(session({
    store : new pgSession ({
        pool:pgPool , 
        tableName: 'sessions'
    }) , 
    secret: 'mySecretKey', // Secret key used to sign the session ID cookie
    resave: false,         // Forces the session to be saved even when unmodified
    saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store
    cookie: { secure: false } // Use 'true' if your app runs on HTTPS
}))*/
app.use('/auth' , authRoutes )




PORT = process.env.SERVER_PORT ;
app.listen(PORT , () => {
    console.log(`Server listening on port ${PORT}`);
});

