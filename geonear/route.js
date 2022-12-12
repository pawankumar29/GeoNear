const express=require('express');
const model=require('./model');
const obj=require('./controller');
const Router=express.Router();
console.log("pawan Kumar1");
Router.route('/insert').post(obj.insert);

Router.route('/near').get(obj.near);


module.exports=Router;
