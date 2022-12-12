const mongoose =require('mongoose');

const schema=new mongoose.Schema({
    name:{type:String,required:true},
    location:{
        type:{type:String},
        coordinates:[{
           type:Number
        }
        ]
       
    },

    category:{type:String,required:true}

})

schema.index({
    startlocation: "2dsphere",   
})
// "location": { "type": "Point", "coordinates": [ 1, 40 ] },

module.exports=mongoose.model("geoNear",schema);