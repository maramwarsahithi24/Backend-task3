const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

const connectDB = require('./connection');
const PORT = 4000;

const staticPath = require('./staticroutes');
const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/note');
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views","./views");

app.get("/login",(req, res) => res.render("login"));
app.get("/signup",(req, res) => res.render("signup"));

app.use('/',staticPath);
app.use('/authorization',authRoutes);
app.use('/notes',noteRoutes);

connectDB("mongodb://127.0.0.1:27017/notesapp");


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});