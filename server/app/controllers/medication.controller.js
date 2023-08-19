const db = require("../models");
const Medication = db.medication;
// register
exports.save=(req, res)=> {
  // save 
  const medication = new Medication({
    medications: req.body.medications
  });

  // Save in the database
  medication
    .save(medication)
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




