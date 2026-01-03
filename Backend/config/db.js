import mongoose from "mongoose";
import dotenv from "dotenv";
// 
dotenv.config();
//connecting tyo mongodb how datagoes to data base
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("DB Connection Error:", error);
        process.exit(1);
    }
}