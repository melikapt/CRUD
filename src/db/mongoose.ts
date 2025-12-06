import mongoose from "mongoose";

export const connectToDB = async()=>{
    try {
        const connection = await mongoose.connect(`mongodb://localhost:27017/CRUD`)
        console.log(`connected to ${connection.connection.host}`);
        return `connected to ${connection.connection.host}`
    } catch (error) {
        console.log("🚀 ~ connectToDB ~ error:", error)
        throw new Error(`connection to db failed: ${error}`);
        
    }
}