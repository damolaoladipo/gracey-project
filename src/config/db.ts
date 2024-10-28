import mongoose from "mongoose";
import colors from "colors";

// connecting to Database
const connectDB = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(colors.green.bold.underline("MongoDB connected!"));
  } catch (error) {
    console.log(colors.red.bold.underline("Error! Connection failed"));
  }
};

export default connectDB

