import getinfo from "./connectToDB.js";

const insert = async () => { 
    const collection = await getinfo();
    const result = await collection.insertMany([
        {
            "Name": "Shashwat",
            "Department": "Developer",
            "Office": "Noida",
            "Package": "10"
        },
        {
            "Name": "Vaibhav",
            "Department": "Tech",
            "Office": "Noida",
            "Package": "4"
        }, 
        {
            "Name": "Rajan",
            "Department": "Developer",
            "Office": "Gurgram",
            "Package": "5"
        }
        
    ]);
    if (result.acknowledged) {
        console.log("Data sucessfully addedd");

    } else { 
        console.log("some issue is there");
    }
    
}

insert();