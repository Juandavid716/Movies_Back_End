const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
    year: String,
    rating: Number,
    poster: String,
    date: {
      type: Date,
      default: Date.now,
    },
    userSelected: String,
    titlecomment: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movies", noteSchema);
