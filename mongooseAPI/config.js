import mongoose from "mongoose";

const DB = await mongoose.connect("mongodb://localhost:27017/Company");

export default DB;


