var db=require('../dbconnection'); //reference of dbconnection.js
 
var Category={
 
getAllCategory:function(callback){
 
return db.query("Select * from category_tbl",callback);
 
},
 getCategoryById:function(id,callback){
 
return db.query("select * from category_tbl where Id=?",[id],callback);
 },
 addCategory:function(Category,callback){
 return db.query("Insert into category_tbl values(?,?,?)",[Category.Id,Category.Name,Category.IsActive],callback);
 },
 deleteCategory:function(id,callback){
  return db.query("delete from category_tbl where Id=?",[id],callback);
 },
 updateCategory:function(id,Category,callback){
  return db.query("update category_tbl set Name=?,IsActive=? where Id=?",[Category.Name,Category.IsActive,id],callback);
 }
 
};
 module.exports=Category;