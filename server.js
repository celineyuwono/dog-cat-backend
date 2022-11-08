var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var axios = require("axios");
//Allow all requests from all domains & localhost
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

app.get("/dogs", function (req, res) {
  const url = axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((data) => {
      res.send(data.data.message);
    });
});

app.get("/cats", function (req, res) {
  const url = axios
    .get("https://api.thecatapi.com/v1/images/search")
    .then((data) => {
      res.send(data.data[0].url);
    });
});

app.listen(6069);
