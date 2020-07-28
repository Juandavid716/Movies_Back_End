const express = require("express");
const app = express();
const Movies = require("../models/movies");
const bcrypt = require("bcryptjs");

app.get("/", async (req, res) => {
  await Movies.find((err, movies) => {
    res.json({
      movies,
    });
  });
});

app.post("/", async (req, res) => {
  const { title, content, rating, date } = req.body;
  const Movie = new Movies({
    title,
    content,
    date,
    rating,
  });
  await Movie.save();

  res.json({ message: "Comment saved" });
});

app.put("/:id", async (req, res) => {
  const { title, content, rating } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    rating,
    content,
  });

  res.json({ message: "Comment updated" });
});

app.delete("/:id", async (req, res) => {
  let x = await Movies.findByIdAndDelete(req.params.id);
  res.json({ message: "Coment deleted" });
  console.log(x);
});
module.exports = app;
