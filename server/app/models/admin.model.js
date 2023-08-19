module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
     
      fullname: String,
      email: String,
      phone: Number,
      password:String,
      confirm_password:String,
      IsActive: String
      
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Admin = mongoose.model("admin", schema);
  return Admin;
};
