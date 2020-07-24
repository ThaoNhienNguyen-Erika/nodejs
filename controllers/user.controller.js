const db = require("../models");
const User = db.users;

exports.challange = (req,res) =>{

	res.send(req.body);
	console.log(req.body);
	
	const user = new User({
    userid: "1",
    point: 100
  });

  user
    .save(user)
    .then(data => {
	console.log("Success");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });

};
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
 User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  	
};

exports.create = (req, res) => {
  // Validate request
  //if (!req.body.title) {
    //res.status(400).send({ message: "Content can not be empty!" });
    //return;
 // }

  // Create a Tutorial
  //const tutorial = new Tutorial({
    //title: req.body.title,
    //description: req.body.description,
   // published: req.body.published ? req.body.published : false
  //});
 const tutorial = new Tutorial({
    title: "1",
    description: "2",
    published: false
  });

  // Save Tutorial in the database
  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};