import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const database = "Employee";

//Approach 1
async function getinfo() { 
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("employee");
}

export default getinfo;
