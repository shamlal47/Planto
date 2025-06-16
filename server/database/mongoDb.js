import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

const connectToMongoDB = async () => {
  try {
    
    if (!DB_URI) {
      throw new Error("DB_URI is not defined in environment variables");
    }
    
    await mongoose.connect(DB_URI);
}
    catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
export default connectToMongoDB;