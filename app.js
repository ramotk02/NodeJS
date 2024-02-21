const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require("dotenv").config();



app.get("/", (req, res) => {
  // res.send("Hello World  grege");
  res.sendFile("./views/index.html", {root: __dirname})
});


mongoose.connect(`mongodb+srv://omartakyot:${process.env.MONGODB_PASSWORD}@cluster0.mxrkn5l.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  
  });
}).catch((err)=>{
  console.log("Error");
})
