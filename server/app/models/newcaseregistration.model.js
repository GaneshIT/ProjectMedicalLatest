module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        text1:String,
        text2:Number,
        text3:String,
        text4:String,
        text5:String,
        text6:String,
        text7:String,
        text8:String,
        text9:String
      }
       
        

        
            
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Newcaseregistration = mongoose.model("newcaseregistrations", schema);
    return Newcaseregistration;
  };
  