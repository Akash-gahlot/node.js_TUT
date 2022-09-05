
import express from 'express';
import DB from './config.js';
import insertModel from './Companies.js';


const app = express();

app.use(express.json());


// 1. API to insert data 
app.post('/Post', async (req, resp) => {
    let data = new insertModel(req.body);
    let result = await data.save();
    console.log(result);
    resp.send("Data inserted successfully");
    
});

// 2.API to get data from DB
app.get("/Get", async (req, resp) => {
    let data = await insertModel.find(req.body);
    resp.send(data);
});

// 3. API to update data in DB

app.put("/Put", async (req, resp) => {
    let data = await insertModel.updateOne((req.body[0]), { $set: (req.body[1]) });
    resp.send(data);
});
// 4 .API to delete data from DB

app.delete("/Delete", async (req, resp) => { 
    let response = await insertModel.remove(req.body);
    resp.send(response);
})
app.listen(4000);
