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

// getinfo().then((resp) => { 
//     let collection = resp.collection("employee");
//     collection.find({Name:"Akash"}).toArray().then((data) => { 
//         console.warn(data);
//     })
    
// })

//to resolve pending issue ,here we have used promise


///Approach 2

const main = async() => { 
    let data = await getinfo();
    return data.find({Name:"sumitesh"}).toArray();
}
let result = await main();
console.log(result);