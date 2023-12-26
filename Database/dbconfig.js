import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const connectDB=async()=>{
    try {
        const mongoURL = process.env.MONGODBCONNECTIONSTRING
    const connection= await mongoose.connect(mongoURL)

    console.log("MongoDB Connected ");
    return connection;
        
    } catch (error) {
        console.error("Error",error);
        
    }
    
}

export default connectDB;