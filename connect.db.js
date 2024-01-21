import mongoose from "mongoose";

const dbUserName = "sahilkhatiwada";
const dbPassword = "sahilkhatiwada12";
const dataBaseName = "E-commerce";
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.nawyyok.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`
    );

    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
