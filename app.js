const express=require('express');
const app=express();
const geoRoute=require('./geonear/route');
app.use(express.json());
require('./geonear/config');
app.use('/pawan',geoRoute);

console.log("pawan Kumar");
app.listen(3000,()=>{
    console.log(`app running at 5000`);
});

