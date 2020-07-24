module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/challange", user.challange);
  // Retrieve all Tutorials
  router.get("/", user.findAll);

  app.use('/api/', router);
};