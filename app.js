const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require("dotenv").config();

// Use the body-parser middleware to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

mongoose.connect(`mongodb+srv://omartakyot:${process.env.MONGODB_PASSWORD}@cluster0.mxrkn5l.mongodb.net/yourdbname?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const Article = require("./models/articleSchema");

app.post("/all-articles", (req, res) => {
  Article.create(req.body)
    .then(result => {
      console.log("Article created:", result);
      res.redirect("/");
    })
    .catch(err => {
      console.error("Error creating article:", err);
      res.status(500).send("Internal Server Error");
    });
});
