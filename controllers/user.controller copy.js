const db = require("../models");
const request = require('request');
const User = db.users;

exports.challange = (req,res) =>{

	res.send(req.body);
	const userid = req.body.event.user;
	findUser(userid);
  	
	
	

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


exports.xemXepHang = (req, res) => {
const xephang = [
	{"name":"trannhat2411999","points":150},
	{"name":"thaonhiennguyen","points":145},
	{"name":"lehai","points":144}
];
  res.send(xephang);
};

function addUser(id,name){
const user = new User({
   userid: id,
   username:name,
    point: 0
  });

 user.save(user).then(data => {
	console.log("Success");
 })
  .catch(err => {
 });
}
function findUser(id){
User.find({}).then(datas=>{
		console.log(datas);
	});
User.find({userid:id})
    .then(data => {
	if(isEmptyObject(data)){
	request("https://slack.com/api/users.info?token=xoxp-1258859871714-1271485003553-1249935710551-15609a104fe30550e66c6edfba9c827c&&user="+id+"&pretty=1", function (error, response, body) {
		addUser(id,JSON.parse(body).user.name);
		User.find({}).then(datas=>{
		console.log(datas);
	});
    });
	}else{
		console.log("user da co trong he thong");
	}
    })
    .catch(err => {
	console.log(err);
    });

};
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

