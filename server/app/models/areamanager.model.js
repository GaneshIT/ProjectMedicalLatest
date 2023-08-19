module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        emp_id:Number,
        AempId:Number,
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
  
    const Areamanager = mongoose.model("areamanager", schema);
    return Areamanager;
  };
  