module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/challange", users.challange);
  // Retrieve all Tutorials
  router.get("/", users.findAll);

  app.use('/api/', router);
};