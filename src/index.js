//Hitesh import code

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/* Working code - imp

import express from "express";
import connectDB from "./db/index.js"; // Import connection logic

const app = express();

// Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    // Start the server only after successful connection
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server listening on port: ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error("Error starting server:", error);
    process.exit(1); // Exit on connection failure
  });

// Your Express app routes and logic here

*/

/* Hitesh old code 
//require("dotenv").config({ path: "./env" });
import mongoose from "mongoose";
import express from "express";

const app = express()(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://guru:GuruMongoDb@tantheta.alash.mongodb.net`
    );
    app.on("Error: ", (error) => {
      console.log("error on express - mongo", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("App is listening on port : 3000}");
    });
  } catch (error) {
    console.error("Database connection Error : ", error);
    throw err;
  }
})();
*/
