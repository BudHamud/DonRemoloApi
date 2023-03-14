import mongoose from "mongoose"

const URI = 'mongodb+srv://BudHamud:Hamuddi5973@cluster0.5sis9i4.mongodb.net/don-remolo?retryWrites=true&w=majority'

mongoose.set("strictQuery", true);
mongoose.connect(URI, {
    serverSelectionTimeoutMS: 5000
  }).catch(err => console.log(err.reason));