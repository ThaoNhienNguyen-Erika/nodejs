const db = require("../models");
const request = require('request');
const e = require("express");
const User = db.users;
const token = "xoxp-1258859871714-1271485003553-1289101843568-080a831499ada275914ee28b8feb46c0";

exports.challange = (async function(req,res){

  console.log("api call");
	res.send(req.body);
  const userid = req.body.event.user;
  const event = req.body.event;
  var data = await findUser(userid);
  if(!isEmptyObject(data)){
    // User đã tồn tại trong DB
    console.log("user đã tồn tại");
    if(event.type=="reaction_added"){
      if(event.user==event.item_user){
        //User tự reaction chính mình
      }else{
        await updatePointUser(event.item_user);
        
        var result =await User.find({});
        console.log(result);
      }
    }
  }else{
    console.log("user đã chưa tồn tại");
    // User chưa tồn tại add mới user;
    await addUser(userid);
    var result =await User.find({});
   
  }
	
	

});
async function findUser(id){
  var result = await User.find({userid:id});
   return result;
};
async function updatePointUser(id){
  var result = await User.updateOne({userid:id},{$inc: {point: 1 }});
   return result;
};
async function addUser(id){
  request("https://slack.com/api/users.info?token="+token+"&&user="+id+"&pretty=1", function (error, response, body){
    var name = JSON.parse(body).user.name;
    const user = new User({
      userid: id,
      username:name,
      point: 0
     });
   
    user.save(user).then(data => {
      console.log(data);
     console.log("Success");
    })
     .catch(err => {
    });
  });
}
 
exports.xemXepHang = (req, res) => {
  User.find({},{_id:0,username: 1, point: 1}).sort( { point: 1 } )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Có lỗi gì rồi"
      });
    });
  	
};

exports.danhgia = (req, res) => {
  var body =req.body;
  if(body.userid == body.text){
    res.send("Bạn không thể tự đánh giá chính mình");
  }else{
    User.updateOne({userid:body.text},{$inc: {point: 1 }}).then(data =>{
      if(data.nModified==1){
        res.send("Đánh giá thành công");
      }else{
        res.send("Đánh giá thất bại không tìm thấy user có id "+body.text);
      }
    }).catch(err => {
      res.send("Đánh giá thất bại không tìm thấy user có id "+body.text);
    });
  }
 
  	
};

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

