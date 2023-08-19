module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        medications:[{
            sno:Number,
            name:String,
            desc:String,
            frequency:Number
        }]
      }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Medication = mongoose.model("medication", schema);
    return Medication;
  };
  