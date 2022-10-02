
const externalApi = "https://dog.ceo/api/breeds/image/random";


var express = require('express');
var router = express.Router();
var request = require('request');

module.exports.allData= function (req,res){
  
  request({
    uri: externalApi,
    query: "mealDb",

  },
  function(err, response, body){
    if(!err ){
      // console.log(body);
      return res.status(200).json({msg: "request successful", data:body})
    }
  } 
  )
  return res.status(500);
}

