const db = require("../models");
const Seniormanager = db.seniormanagers;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.full_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a seniormanager
  const seniormanager = new Seniormanager({
    emp_id: req.body.emp_id,
    full_name: req.body.full_name,
    designation: req.body.designation,
    password: req.body.password,
    state: req.body.state,
    
    
  });

  // Save seniormanager  in the database
  seniormanager
    .save(seniormanager)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the seniormanager."
      });
    });
};

// Retrieve all seniormanager from the database.
exports.findAll = (req, res) => {
  const full_name= req.query.full_name;
  var condition = full_name ? { full_name: { $regex: new RegExp(full_name), $options: "i" } } : {};

  Seniormanager.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving seniormanager."
      });
    });
};

// Find a single seniormanager with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Seniormanager.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found seniormanager with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving seniormanager with id=" + id });
    });
};

// Update a seniormanager by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Seniormanager.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update seniormanager with id=${id}. Maybe seniormanager was not found!`
        });
      } else res.send({ message: "seniormanager was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating seniormanager with id=" + id
      });
    });
};

// Delete a seniormanager  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Seniormanager.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete seniormanager with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "seniormanager was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete seniormanager with id=" + id
      });
    });
};

// Delete all seniormanager from the database.
exports.deleteAll = (req, res) => {
  Seniormanager.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} seniormanager were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all seniormanager."
      });
    });
};

// Find all published seniormanager
exports.findAllPublished = (req, res) => {
 Seniormanager.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving seniormanager."
      });
    });
};
