import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';

//console.log(url);
const client = new MongoClient(url);

const database = "person";

async function getData() { 
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("person1");
    let response = await collection.find({}).toArray();

    console.log(response);

}
getData();

