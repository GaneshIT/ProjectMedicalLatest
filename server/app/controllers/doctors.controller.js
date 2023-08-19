const db = require("../models");
const Doctor = db.doctors;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.fullname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a doctors
  const doctors = new Doctor({
    doctor_id:req.body.doctor_id,
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    register_number: req.body.register_number,
    place: req.body.place,
    hospital_name: req.body.hospital_name,
    password: req.body.password,
    state: req.body.state,
    city: req.body.city,
    register_date:req.body.register_date,
    code_number: req.body.code_number,
    status:'reject'
    
    
  });

  // Save doctors  in the database
  doctors
    .save(doctors)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the doctors."
      });
    });
};
exports.login=(req, res)=> {
  // Validate request
  if (!req.body.email && !req.body.password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // login
  const doctor = new Doctor({
    email: req.body.email,
    password: req.body.password
  });

  // Save admin in the database
  Doctor
    .find({
      email: req.body.email,
      password: req.body.password
    })
    .then(data => {
      if(data.length>0)
      res.send({fullname:data[0].fullname,email:data[0].email,phone:data[0].phone,place:data[0].place,hospital_name:data[0].hospital_name,city:data[0].city,state:data[0].state});
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

// Retrieve all doctors from the database.
exports.findAll = (req, res) => {
  const fullname= req.query.fullname;
  var condition = fullname ? { fullname: { $regex: new RegExp(fullname), $options: "i" } } : {};

  Doctor.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving doctors."
      });
    });
};

// Find a single doctors with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Doctor.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found doctors with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving doctors with id=" + id });
    });
};

// Update a doctors by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Doctor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update doctors with id=${id}. Maybe doctors was not found!`
        });
      } else res.send({ message: "doctors was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating doctors with id=" + id
      });
    });
};

// Delete a doctors  with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Doctor.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete doctors with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "doctors was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete doctors with id=" + id
      });
    });
};

// Delete all doctors from the database.
exports.deleteAll = (req, res) => {
  Doctor.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} doctors were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all doctors."
      });
    });
};

// Find all published doctors
exports.findAllPublished = (req, res) => {
 Doctor.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving doctors."
      });
    });
};
