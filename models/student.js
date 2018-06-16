var db=require('../dbconnection'); //reference of dbconnection.js
 
var Student={
 
getAllStudents:function(callback){
 
return db.query("Select * from student",callback);
 
},
 getStudentByRollno:function(rollno,callback){
 
return db.query("select * from student where Rollno=?",[rollno],callback);
 },
 addStudent:function(Student,callback){
 return db.query("Insert into student values(?,?,?,?,?,?)",[Student.Rollno,Student.Name,Student.Mobileno,Student.Gender,Student.City,Student.Fee],callback);
 },
 deleteStudent:function(rollno,callback){
  return db.query("delete from student where Rollno=?",[rollno],callback);
 },
 updateStudent:function(id,Product,callback){
  return db.query("update student set Name=?,Mobileno=?,Gender=?,City=?,Fee=? where Rollno=?",[Student.Name,Student.Mobileno,Student.Gender,Student.City,Student.Fee,Student.Rollno],callback);
 }
 
};
 module.exports=Student;