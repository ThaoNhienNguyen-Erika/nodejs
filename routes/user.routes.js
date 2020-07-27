module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/challange/", user.challange);
  router.post("/xembangxephang", user.xemXepHang);
  router.post("/danhgia", user.danhgia);

  app.use('/api/', router);
};