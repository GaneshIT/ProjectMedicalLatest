module.exports = app => {
    const doctors = require("../controllers/doctors.controller.js");
  
    var router = require("express").Router();
  
    // Create a new doctors
    router.post("/", doctors.create);
  
    // Retrieve all doctors
    router.get("/", doctors.findAll);
  
    // Retrieve all published doctors
    router.get("/published", doctors.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", doctors.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", doctors.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", doctors.delete);
  
    // Create a new Tutorial
    router.delete("/", doctors.deleteAll);
    // Login
  router.post("/login", doctors.login);

  
    app.use("/api/doctors", router);
  };
  