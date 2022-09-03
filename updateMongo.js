import getinfo from "./connectToDB.js";


const update = async () => { 
    let collection = await getinfo();
    //console.log(collection);
   // return collection.insertOne({name:"Meera",Department:"Teaching",Office:"Meerut",Package:"6"});
    // let update = await collection.updateOne({ Name: "Meera" }, { $set: { Name: "Ayush", Office: "Gurugram" } });
    // return update;
    let del =await collection.deleteOne({ Name: "Ayush" });
    return del;

}

const result = await update();

console.warn(result);