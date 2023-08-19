module.exports = app => {
  const admins = require("../controllers/admin.controller.js");

  var router = require("express").Router();

  // Create a new admin
  router.post("/register", admins.register);

  // Login
  router.post("/login", admins.login);

  // Retrieve all admins
  router.get("/", admins.getAll);


  router.put("/:id", admins.update);
  router.delete("/:id", admins.delete);
  
  app.use("/api/admins", router);
};
