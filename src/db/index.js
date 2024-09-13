//Gemini Code

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://guru:GuruMongoDb@tantheta.alash.mongodb.net" // Replace with your database name
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

/*import express from "express";
import mongoose from "mongoose";

const app = express();

const connect = mongoose.connect();

app.listen("3000", () => {
  console.log("Server is running on port: 3000");
});

export default connect;
*/

/*Hitesh's code

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://guru:GuruMongoDb@tantheta.alash.mongodb.net`
    );
    console.log("\n MongoDB Connected !! ");
  } catch (error) {
    console.log("MongoDB connection Error :", error);
    process.exit(1);
  }
};

export default connectDB;
*/
