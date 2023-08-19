const db = require("../models");
const Areamanager = db.areamanagers;

// Create and Save a new areamanager
exports.create = (req, res) => {
  // Validate request
  if (!req.body.full_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a areamanager
  const areamanager = new Areamanager({
    emp_id: req.body.emp_id,
    AempId:req.body.AempId,
    full_name: req.body.full_name,
    designation: req.body.designation,
    password: req.body.password,
    state: req.body.state,
    
    
  });

  // Save areamanager  in the database
  areamanager
    .save(areamanager)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the areamanager."
      });
    });
};

// Retrieve all areamanager from the database.
exports.findAll = (req, res) => {
  const full_name= req.query.full_name;
  var condition = full_name ? { full_name: { $regex: new RegExp(full_name), $options: "i" } } : {};

  Areamanager.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving areamanager."
      });
    });
};

// Find a single areamanager with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Areamanager.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found areamanager with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving areamanager with id=" + id });
    });
};

// Update a areamanager by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Areamanager.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update areamanager with id=${id}. Maybe areamanager was not found!`
        });
      } else res.send({ message: "areamanager was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating areamanager with id=" + id
      });
    });
};

// Delete a areamanager  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Areamanager.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete areamanager with id=${id}. Maybe areamanager was not found!`
        });
      } else {
        res.send({
          message: "areamanager was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete areamanager with id=" + id
      });
    });
};

// Delete all areamanager from the database.
exports.deleteAll = (req, res) => {
  Areamanager.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} areamanager were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all areamanager."
      });
    });
};

// Find all published areamanager
exports.findAllPublished = (req, res) => {
 Areamanager.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving areamanager."
      });
    });
};
