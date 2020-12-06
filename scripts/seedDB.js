const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projects");

const projectSeed = [
  {
    title: "Weather-or-Not",
    description: "A weather app with dynamic graphing of forecast temperatures",
    tools: ["JavaScript", "Plot.ly", "Bootstrap"],
    image: "./images/header-and-today.png",
    altTxt: "weather app header",
    repo: "https://github.com/egilbertsen/weather-app",
    launchedApp: "https://egilbertsen.github.io/weather-app/"
  },
  {
    title: "StarPlannr",
    description: "A stargazing app that provides a dynamically populated viewing forecast for a given night",
    tools: ["JavaScript", "jQuery UI", "Foundation"],
    image: "./images/star-plannr.png",
    altTxt: "star planning app",
    repo: "https://github.com/egilbertsen/StarPlannr",
    launchedApp: "https://egilbertsen.github.io/StarPlannr/"
  },
  {
    title: "Budget Tracker",
    description: "Budgeting app that provides for offline caching",
    tools: ["JavaScript", "MongoDB", "Express"],
    image: "./images/header-and-today.png",
    altTxt: "budget app demo",
    repo: "https://github.com/egilbertsen/budget-app",
    launchedApp: "https://desolate-ridge-68330.herokuapp.com"
  },
  {
    title: "Workday Planner",
    description: "A single-day calendar app that allows you to locally store your day's events",
    tools: ["JavaScript", "Plot.ly", "Bootstrap"],
    image: "./images/header-and-today.png",
    altTxt: "weather app header",
    repo: "https://github.com/egilbertsen/weather-app",
    launchedApp: "https://egilbertsen.github.io/weather-app/"
  }
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
