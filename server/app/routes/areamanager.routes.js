module.exports = app => {
    const areamanager = require("../controllers/areamanager.controller.js");
  
    var router = require("express").Router();
  
    // Create a new areamanager
    router.post("/", areamanager.create);
  
    // Retrieve all areamanager
    router.get("/", areamanager.findAll);
  
    // Retrieve all published areamanager
    router.get("/published", areamanager.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", areamanager.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", areamanager.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", areamanager.delete);
  
    // Create a new Tutorial
    router.delete("/", areamanager.deleteAll);
  
    app.use("/api/areamanager", router);
  };
  