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

app.get("/:id", async (req, res) => {
  const movie = await Movies.findById(req.params.id);

  res.json(movie);
});
app.post("/", async (req, res) => {
  const {
    title,
    content,
    rating,
    date,
    year,
    poster,
    titlecomment,
    userSelected,
  } = req.body;
  const Movie = new Movies({
    title,
    content,
    date,
    rating,
    year,
    poster,
    titlecomment,
    userSelected,
  });
  await Movie.save();

  res.json({ message: "Comment saved" });
});

app.put("/:id", async (req, res) => {
  const { titlecomment, content, rating } = req.body;
  await Movies.findByIdAndUpdate(req.params.id, {
    titlecomment,
    content,
    rating,
  });

  res.json({ message: "Comment updated" });
});

app.delete("/:id", async (req, res) => {
  let x = await Movies.findByIdAndDelete(req.params.id);
  res.json({ message: "Coment deleted" });
  console.log(x);
});
module.exports = app;
