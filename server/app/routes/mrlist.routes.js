module.exports = app => {
    const mrlist = require("../controllers/mrlist.controller.js");
  
    var router = require("express").Router();
  
    // Create a new mrlist
    router.post("/", mrlist.create);
  
    // Retrieve all mrlist
    router.get("/", mrlist.findAll);
  
    // Retrieve all published mrlist
    router.get("/published", mrlist.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", mrlist.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", mrlist.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", mrlist.delete);
  
    // Create a new Tutorial
    router.delete("/", mrlist.deleteAll);
  
    app.use("/api/mrlist", router);
  };
  