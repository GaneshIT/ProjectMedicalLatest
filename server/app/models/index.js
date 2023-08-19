const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.admins = require("./admin.model.js")(mongoose);
db.seniormanagers = require("./seniormanager.model.js")(mongoose);
db.doctors = require("./doctors.model.js")(mongoose);
db.areamanagers = require("./areamanager.model.js")(mongoose);
db.mrlists = require("./mrlist.model.js")(mongoose);
db.newcaseregistration = require("./newcaseregistration.model.js")(mongoose);
db.medication = require("./medication.model.js")(mongoose);

module.exports = db;
