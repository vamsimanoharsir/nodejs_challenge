module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      //collection schema
      new mongoose.Schema(
        {
          title: {type: String},
          author: {type: String},
          summary: {type: String},
        }
      )
    );
  
    return Tutorial;
  };

  