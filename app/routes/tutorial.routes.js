module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
    
    //all routes atarting with this end point
    app.use('/api/tutorials', router);

    //1. adding a new book
    router.post("/", tutorials.create);
  
    //2. View a list of all books
    router.get("/", tutorials.findAll);
  
    //3. View details of a specific book by its ID
    router.get("/:id", tutorials.findOne);
  
    //4. Update a book's details
    router.put("/:id", tutorials.update);
  
    //5. Delete a book
    router.delete("/:id", tutorials.delete);
  
    //6. extra route I have configued based on entry
    router.get("/published", tutorials.findAllsummary);

    //7. deleted all the entries in the collection
    router.delete("/", tutorials.deleteAll);
  
  };