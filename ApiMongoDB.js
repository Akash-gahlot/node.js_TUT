import express from 'express';
import getinfo from './connectToDB.js';
const app = express();

app.use(express.json());
app.get("/", async (req, resp) => {
    let collection = await getinfo();
    let result = await collection.find().toArray();
    resp.send(result);
});
app.post("/post", async(req, resp) => {
    let collection = await getinfo();
    collection.insertOne(req.body);
    resp.send(req.body);
  
});

app.listen(3000);