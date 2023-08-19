module.exports = app => {
    const seniormanager = require("../controllers/seniormanager.controller.js");
  
    var router = require("express").Router();
  
    // Create a new seniormanager
    router.post("/", seniormanager.create);
  
    // Retrieve all seniormanager
    router.get("/", seniormanager.findAll);
  
    // Retrieve all published seniormanager
    router.get("/published", seniormanager.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", seniormanager.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", seniormanager.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", seniormanager.delete);
  
    // Create a new Tutorial
    router.delete("/", seniormanager.deleteAll);
  
    app.use("/api/seniormanager", router);
  };
  