var express =require("express");
var app=express();
app.get("/",function(req,res){
  res.send("Get request to dhanush");

});
app.post("/",function(req,res){
  res.send("Post request to dhanush")
});
app.put("/",function(req,res){
  res.send("Put request to dhanush")
});
app.listen(4000,function(){
  console.log("Sever 4000 is running............")
});