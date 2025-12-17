const mongoose=require("mongoose")

db_url="mongodb+srv://rithikregneshak:<rithikregneshak>@cluster0.bw3tm25.mongodb.net/?appName=Cluster0";


const connectDB=async()=>{
    try{
        await mongoose.connect(db_url);
            console.log("MongoDB connected");
        }
        catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}
module.exports=connectDB;
