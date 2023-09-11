// require modules
// Load environment variables from .env file (env variable is useless here )
const env = require("dotenv").config();
const session = require("express-session");
const express = require("express");
const pgSession = require("connect-pg-simple")(session);
const pgPool = require("./config/database");
const cors = require("cors");
const {checkSignIn} = require('./middlewares/checkSignIn.js')


// initialize express app
const app = express();
// Require Routes (Functionality-Based Routing (e.g., /auth/login, /posts/create))
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require('./routes/profileRoutes')

app.use(
  cors({
    origin: "http://localhost:3000", // replace with your frontend application's URL
    credentials: true, // important
  })
);
app.use(express.json());
//sessions 
app.use(
  session({
    store: new pgSession({
      pool: pgPool,
      tableName: "sessions",
    }),
    secret: "mySecretKey", // Secret key used to sign the session ID cookie
    resave: true, // Forces the session to be saved even when unmodified
    saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store
    cookie: { secure: false }, // Use 'true' if your app runs on HTTPS
  })
);
app.use("/auth" ,authRoutes);
app.use('/profile' , profileRoutes)

PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
