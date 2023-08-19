const db = require("../models");
const Mrlist = db.mrlists;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.full_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a mrlist
  const mrlist = new Mrlist({
    
    AempId:req.body.AempId,
    MempId: req.body.MempId,
    full_name: req.body.full_name,
    designation: req.body.designation,
    password: req.body.password,
    state: req.body.state,
    
    
  });

  // Save mrlist  in the database
  mrlist
    .save(mrlist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the mrlist."
      });
    });
};

// Retrieve all mrlist from the database.
exports.findAll = (req, res) => {
  const full_name= req.query.full_name;
  var condition = full_name ? { full_name: { $regex: new RegExp(full_name), $options: "i" } } : {};

  Mrlist.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mrlist."
      });
    });
};

// Find a single mrlist with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Mrlist.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found mrlist with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving mrlist with id=" + id });
    });
};

// Update a mrlist by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Mrlist.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update mrlist with id=${id}. Maybe mrlist was not found!`
        });
      } else res.send({ message: "mrlist was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating mrlist with id=" + id
      });
    });
};

// Delete a mrlist  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Mrlist.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete mrlist with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "mrlist was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete mrlist with id=" + id
      });
    });
};

// Delete all mrlist from the database.
exports.deleteAll = (req, res) => {
  Mrlist.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} mrlist were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all mrlist."
      });
    });
};

// Find all published mrlist
exports.findAllPublished = (req, res) => {
 Mrlist.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mrlist."
      });
    });
};
