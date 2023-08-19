module.exports = app => {
  const medications = require("../controllers/medication.controller.js");

  var router = require("express").Router();

  // Create a new admin
  router.post("/", medications.save);

  
  
  app.use("/api/medications", router);
};
