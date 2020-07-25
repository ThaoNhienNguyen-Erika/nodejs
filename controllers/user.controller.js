const db = require("../models");
const request = require('request');
const User = db.users;

exports.challange = (req,res) =>{

	res.send(req.body);
	const userid = req.body.event.user;
  	request("https://slack.com/api/users.info?token=xoxb-1258859871714-1247843080615-lkRlIh9dkXbXyL6jOaO8IUsw&user="+userid+"&pretty=1", function (error, response, body) {
	console.log(JSON.parse(body).user.name);
	if(req.body.event.type=="reaction_added"){
	console.log(req.body.event.reaction);
	}else{
	console.log(req.body.event.text);
	}
    });
	
	//const user = new User({
   // userid: "1",
   // point: 100
 // });

 // user
  //  .save(user)
   // .then(data => {
//	console.log("Success");
  //  })
  //  .catch(err => {
   //   res.status(500).send({
    //    message:
   //       err.message || "Some error occurred while creating the Tutorial."
   //   });
   // });

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

exports.xemDiem = (req, res) => {
  res.send("trannhat2411999 : 150 points");
};
exports.xemXepHang = (req, res) => {
const xephang = [
	{"name":"trannhat2411999","points":150},
	{"name":"thaonhiennguyen","points":145},
	{"name":"lehai","points":144}
];
  res.send(xephang);
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