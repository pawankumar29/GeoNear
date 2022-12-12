
const model=require('./model');


class geo{

    insert=async(req,res)=>{

        try{
        
        const data=req.body;
       
       const rest= await model.create(data);

       

        return res.json({status:1,msg:"successful",rest});

        }
        catch(e){
            return res.json({status:0,error:e.message});
        }



    }

    near=async(req,res)=>{
        console.log("pawan Kumar2");

        try{

           const pipeline=[
            {
                $geoNear: {
                   near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
                   distanceField: "dist.calculated",
                   key: "location",
                   maxDistance: 2,
                   query: { category: "Parks" },
                   includeLocs: "dist.location",
                   spherical: true
                }
              }
         ]

         const restdata=await model.aggregate(pipeline);
         console.log(restdata,"restdata");
        //  console.log(rest);
         return res.json({status:1,msg:"successful",restdata});
        }catch(e){
          
            return res.json({status:0,msg:"failed",err:e.message});

        }
    }

}

module.exports=new geo();