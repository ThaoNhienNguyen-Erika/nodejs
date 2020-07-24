module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  router.get("/challange", tutorials.challange);
  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Create a new Tutorial
  router.post("/", tutorials.create);

  app.use('/api/', router);
};