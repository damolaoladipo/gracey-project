import mongoose from "mongoose";
import colors from "colors";

// Connecting to Database
const connectDB = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(colors.green.bold.underline("✅ MongoDB connected!"));
  } catch (error: any) {
    console.log(colors.red.bold.underline(" MongoDB connection failed"));
    console.error(colors.red(error.message)); 
  }
};

export default connectDB;
