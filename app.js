var express=require('express');

var http=require('http');

var app=new express();

app.set('view engine','ejs');

app.get('/',function(req,res){

      
       
	    var options={
	      host:"www.tianqiapi.com",
		  path:encodeURI("/api/?version=v1&city="+req.query.city),
	     method:'get'
}
   var sendmsg='';
   var request=http.request(options,function(response){
	response.on("data",function(chunk){
	       sendmsg+=chunk;
	});
	response.on("end",function(d){
	var list=JSON.parse(sendmsg);
	console.log(list);
	
	res.render('weather',{
	    city:list.city,
	  update_time:list.update_time,
	  data:list.data
	  });});
	
	
    });
   request.end(); 
   
   console.log(options.path,req.query);
  
   
  


      
	  

})



app.listen('3000','127.0.0.1');