import mongoose from "mongoose";
import { URI } from './config.js'

const connectDB = async () => {
  try {
    await mongoose.connect(URI)
    console.log("✅ MongoDB connected")
  } catch (err) {
    console.log("❌ Error connecting to MongoDB", err.message)
    process.exit(1);
  }
}

export default connectDB