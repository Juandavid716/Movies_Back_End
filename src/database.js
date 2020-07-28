const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/moviesdb",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err, res) => {
    if (err) throw err;
    console.log("Base de datos online");
  }
);
const conecction = mongoose.connection;

conecction.once("open", () => {
  console.log("DB is connected");
});
module.exports = mongoose;
