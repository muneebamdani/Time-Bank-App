const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const AuthRouter = require("./src/Router/AuthRouter");
const port = 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
  }));

mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.log("MongoDB error:", err));


app.use(AuthRouter)

app.get("/", (req, res) => {
    res.status(200).send("Hello World I Am Running");
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port} — Good Start, Shazim`);
});