const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/database");
const path = require("path");

const items = require("./routes/api/items");

const app = express();

// body parser
app.use(bodyParser.json());

// mongoose
mongoose.connect(
  config.mongoURI,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

// on connect
db.on("connected", () => {
  console.log("connected");
});

// on error
db.on("error", error => {
  console.log(error);
});

/* if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));
  // routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} */

app.use("/api/items", items);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
