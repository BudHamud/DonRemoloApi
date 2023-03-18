import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.MONGO_URL;

mongoose.set("strictQuery", true);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err.reason));
