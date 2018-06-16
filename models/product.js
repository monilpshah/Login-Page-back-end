var db=require('../dbconnection'); //reference of dbconnection.js
 
var Product={
 
getAllProducts:function(callback){
 
return db.query("Select * from product",callback);
 
},
 getProductById:function(id,callback){
 
return db.query("select * from product where Id=?",[id],callback);
 },
 addProduct:function(Product,callback){
 return db.query("Insert into product values(?,?,?,?,?,?)",[Product.Id,Product.Name,Product.Price,Product.Image,Product.Mfg,Product.Soh],callback);
 },
 deleteProduct:function(id,callback){
  return db.query("delete from product where Id=?",[id],callback);
 },
 updateProduct:function(id,Product,callback){
  return db.query("update product set Name=?,Price=?,Image=?,Mfg=?,Soh=? where Id=?",[Product.Name,Product.Price,Product.Image,Product.Mfg,Product.Soh,id],callback);
 }
 
};
 module.exports=Product;