var db=require('../dbconnection'); //reference of dbconnection.js
 
var User={
 
 getAllLog:function(callback){
    return db.query("Select * from usertable",callback);
         
  },

 getLogById:function(item,callback){
    return db.query("select * from usertable where emailId=? AND password=?",[item.emailId,item.password],callback);
 },
getProfile:function(emailId,callback){
    return db.query("select * from usertable where emailId=?",[emailId],callback);
 },
 addLog:function(User,callback){
    return db.query("Insert into usertable values(?,?,?,?,?,?,?)",[User.emailId,User.userName,User.password,User.mobileNo,User.city,User.gender,User.address],callback);
 },
 deleteLog:function(id,callback){
  return db.query("delete from usertable where emailId=?",[id],callback);
 },
 updateLog:function(id,User,callback){
  return db.query("update usertable set userName=?,password=?,mobileNo=?,city=?,gender=?,address=? where emailId=?",[User.userName,User.password,User.mobileNo,User.city,User.gender,User.address,id],callback);
 },
 changePassword:function(emailId,User,callback){
    return db.query("update usertable set password=? where emailId=?",[User.password,emailId]);
 },
 forgetPassword:function(id,User,callback){
    return db.query("update usertable set password=? where emailId=?",[User.password,id]);
 }
 
};
 module.exports=User;