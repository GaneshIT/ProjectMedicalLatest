module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        AempId:Number,
        MempId:Number,
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
  
    const Mrlist = mongoose.model("mrlist", schema);
    return Mrlist;
  };
  