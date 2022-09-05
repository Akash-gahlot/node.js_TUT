import mongoose from 'mongoose';
const companySchema = mongoose.Schema({
    Company: String,
    Domain: String,
    MKT: Number,
    HQ: String,
    Nifty50: String
});

const insertModel = mongoose.model("Companies", companySchema);


export default insertModel;
