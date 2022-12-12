const mongoose=require('mongoose');
mongoose.set('strictQuery', false);

  const con=async()=>{ 
    try{
    mongoose.connect("mongodb://127.0.0.1/geo", () => {
            console.log(`mongoose connected successfully at 3000`);
        })
  
}catch(e){
    console.log(`error---->${e}`);
}

       
  
  };



module.exports=con();

