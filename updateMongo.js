import getinfo from "./connectToDB.js";


const update = async () => { 
    let collection = await getinfo();
    return collection.deleteOne({ "name": "Vaibhav" });
}

const result = await update();

if (result.acknowledged) {
    console.log("Data updated successully");
}
else { 
    console.log("Data not updated");
}