const db = require("../models");
const Admin = db.admins;
// register
exports.register=(req, res)=> {
  // Validate request
  console.log(req.body.email);
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;

  }

  // save admin
  const admin = new Admin({
    
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    confirm_password:req.body.confirm_password,
    IsActive: "Active",
      
  });

  // Save admin in the database
  admin
    .save(admin)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the admin."
      });
    });
};
// login
exports.login=(req, res)=> {
  // Validate request
  if (!req.body.email && !req.body.password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // login
  const admin = new Admin({
    email: req.body.email,
    password: req.body.password
  });

  // Save admin in the database
  Admin
    .find({
      email: req.body.email,
      password: req.body.password
    })
    .then(data => {
      if(data.length>0)
      res.send({fullname:data[0].fullname,email:data[0].email});
      else
      res.send('Invalid')
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while checking the admin."
      });
    });
};
// Retrieve all admins from the database.
exports.getAll=(req, res) =>{
  //const title = req.query.title;
  //var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Admin.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving admins."
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Admin.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Admin with id=${id}. Maybe Admin was not found!`
        });
      } else res.send({ message: "Admin was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Admin with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Admin.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`
        });
      } else {
        res.send({
          message: "Admin was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Admin with id=" + id
      });
    });
};


