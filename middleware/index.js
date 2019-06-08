var middleware ={};
middleware.checklogin=function(req,res,next){
  if(req.isAuthenticated()){
     next();
  }else{
  req.flash("error","Log in first!")
  res.redirect("/login");
}}
module.exports=middleware;