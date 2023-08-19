module.exports = app => {
    const newcaseregistration = require("../controllers/newcaseregistration.controller.js");
  
    var router = require("express").Router();
  
    // Create a new newcaseregistration
    router.post("/", newcaseregistration.create);
  
    // Retrieve all newcaseregistration
    router.get("/", newcaseregistration.findAll);
  
    // Retrieve all published newcaseregistration
    router.get("/published", newcaseregistration.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", newcaseregistration.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", newcaseregistration.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", newcaseregistration.delete);
  
    // Create a new Tutorial
    router.delete("/", newcaseregistration.deleteAll);
  
    app.use("/api/newcaseregistration", router);
  };
  