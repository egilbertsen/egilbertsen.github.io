const express = require("express");
const path = require("path");
const router = require("express").Router();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
