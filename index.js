const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const port = 3001 || process.env.PORT;
require("dotenv").config();
const api_key = process.env.api_key;
//using static files like css from public dir, as express doesn't allow to do...
//we are expllictly using static middleware
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
//setting view engine as ejs to make html file render in response
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.status(200).send("Hello Express Server");
  //rendering ejs boilerplate index.ejs to run as response to sever
  res.render("index");
});

app.post("/", (req, res) => {
  let city = req.body.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
  console.log(api_key);
  console.log(req.body.city);
  request(url, (err, response, body) => {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again"
        });
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}`;
        res.render("index", { weather: weatherText, error: null });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
