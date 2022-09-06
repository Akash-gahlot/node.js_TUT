import mongoose from "mongoose";
import express from 'express';

await mongoose.connect("mongodb://localhost:27017/EmployeeDB");

const app = express();

app.use(express.json());


const schema = new mongoose.Schema({
  Name: String,
  Department: String,
  Office: String,
  Package: Number,
});

const Model = mongoose.model("employees", schema);
app.get("/Search/:Key", async(req, resp) => { 
    console.log(req.params.Key);
    let data = await Model.find({
        "$or": [
            { "Name": { $regex: req.params.Key } },
            { "Office": { $regex: req.params.Key } }
        ]
    });
    resp.send(data);
})

app.listen(1000);