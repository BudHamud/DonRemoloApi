import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.MONGO_URL;

mongoose.set("strictQuery", true);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB without failures");
  })
  .catch((err) => console.log(err.reason));
