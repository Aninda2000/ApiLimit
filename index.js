const express= require('express');

const app= express();
const port=8000;
const rateLimit = require("express-rate-limit");

var count=0;
app.use(count);
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 20, 
  standardHeaders: true, 
  legacyHeaders: false,
  message: "You exceeded 20 requests  1 minute!", 
});


app.use("/", apiLimiter);
//use the body
app.use(express.urlencoded({extended:true}));

app.use('/', require('./routes/index'));





app.listen(port,function(err){
    if(err){ console.log("error in starting server"); return;}
    console.log("server is running on Port :", port);
})