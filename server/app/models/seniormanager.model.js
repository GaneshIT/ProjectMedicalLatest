module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        emp_id:Number,
        full_name:String,
        designation:String,
        password:String,
        state:String
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Seniormanager = mongoose.model("seniormanager", schema);
    return Seniormanager;
  };
  