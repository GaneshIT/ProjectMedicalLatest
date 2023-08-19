const db = require("../models");
const Newcaseregistration = db.newcaseregistration;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.text1) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a newcaseregistration
  const newcaseregistration = new Newcaseregistration({
    text1: req.body.text1,
    text2: req.body.text2,
    text3: req.body.text3,
    text4: req.body.text4,
    text5: req.body.text5,
    text6: req.body.text6,
    text7: req.body.text7,
    text8: req.body.text8,
    text9: req.body.text9,
    
    
    
  });

  // Save newcaseregistration  in the database
  newcaseregistration
    .save(newcaseregistration)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the newcaseregistration."
      });
    });
};

// Retrieve all newcaseregistration from the database.
exports.findAll = (req, res) => {
  const full_name= req.query.full_name;
  var condition = full_name ? { full_name: { $regex: new RegExp(full_name), $options: "i" } } : {};

  Newcaseregistration.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving newcaseregistration."
      });
    });
};

// Find a single newcaseregistration with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Newcaseregistration.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found newcaseregistration with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving newcaseregistration with id=" + id });
    });
};

// Update a newcaseregistration by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Newcaseregistration.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update newcaseregistration with id=${id}. Maybe newcaseregistration was not found!`
        });
      } else res.send({ message: "newcaseregistration was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating newcaseregistration with id=" + id
      });
    });
};

// Delete a newcaseregistration  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Newcaseregistration.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete newcaseregistration with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "newcaseregistration was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete newcaseregistration with id=" + id
      });
    });
};

// Delete all newcaseregistration from the database.
exports.deleteAll = (req, res) => {
  Newcaseregistration.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} newcaseregistration were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all newcaseregistration."
      });
    });
};

// Find all published newcaseregistration
exports.findAllPublished = (req, res) => {
 Newcaseregistration.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving newcaseregistration."
      });
    });
};
