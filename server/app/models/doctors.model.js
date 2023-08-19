module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        doctor_id:Number,
        fullname: String,
        email: String,
        phone: Number,
        register_number:Number,
        place:String,
        hospital_name:String,
        password:String,
        state:String,
        city:String,
        code_number:Number,
        status:String,
        register_date:Date
            }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Doctor = mongoose.model("doctors", schema);
    return Doctor;
  };
  