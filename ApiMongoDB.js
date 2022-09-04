import express from 'express';
import getinfo from './connectToDB.js';
const app = express();

app.use(express.json());
app.get("/", async (req, resp) => {  //get method is to get some response thorugh dB or any other source via API
    let collection = await getinfo();
    let result = await collection.find().toArray();
    resp.send(result);
});

app.post("/post", async(req, resp) => {   //post method is to insert data in DB via API
    let collection = await getinfo();
    collection.insertOne(req.body);
    resp.send(req.body);
  
});

app.put("/:Name", async (req, resp) => {  //put method is to update data in DB via API
    let collection = await getinfo();
   await collection.updateOne({ Name:req.params.Name }, { $set: req.body });
    resp.send({ result: "Updated" });
});

app.delete("/:Name", async (req, resp) => {    //delete method is used delete data from DB via API.
    let collection = await getinfo();
    await collection.deleteOne({ Name: req.params.Name });
    resp.send({ "Result": "Deleted" }); 
})

app.listen(3000);