import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.LOCAL;

mongoose.set("strictQuery", true);
mongoose
  .connect(URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));
