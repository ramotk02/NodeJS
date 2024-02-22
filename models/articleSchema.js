const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: String,
  firstName: String, 
  age: Number,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
