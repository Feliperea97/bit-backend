import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
    await mongoose.connect(process.env.MONGODB_ATLAS_URI);
    console.log("mongoDB Atlas connected succesfully");
    } catch(error) {
    console.log("MongoDB Atlas connection failed");
    }
};

export default connectDB

