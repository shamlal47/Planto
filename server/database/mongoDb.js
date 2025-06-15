import mongoose from "mongoose";
import { DB_URI } from "../config/env";

export const connectToMongoDB = async () => {
  try {
    
    if (!DB_URI) {
      throw new Error("DB_URI is not defined in environment variables");
    }
    
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
}
    catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}