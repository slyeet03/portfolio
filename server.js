const cors = require("cors");
const express = require("express");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: ["https://localhost:3000", "https://127.0.0.1:3000"],
  }),
);

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //use css
app.set("view engine", "ejs");

//session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, //save only when smthing is modified
    saveUninitialized: false,
  }),
);

//routes
const homeRoutes = require("./routes/home");
app.use("/", homeRoutes);
const worksRoutes = require("./routes/works");
app.use("/works", worksRoutes);

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
