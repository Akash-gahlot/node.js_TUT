
import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/EmployeeDB");
const EmployeeSchema = new mongoose.Schema({
        Name: String,
        Department: String,
        Office: String,
        Package:Number,
}); 
    
const insert = async () => { 
    //(1).Create or Insert data
    const employeeModel = mongoose.model("employees", EmployeeSchema);

    let data = employeeModel({ Name: "Akash", Department: "IT",price:1000,Office:"Bangalore",Package:3.5});
    
    let result = await data.save();

    console.log(result);

}
 

    //(2).To update data in mongoose
const update = async () => { 
    const updatemodel = mongoose.model("employees", EmployeeSchema);
    try {
        let data = await updatemodel.updateOne({ Name: "Ronaldo" }, { $set: { Package: 4000000 } });
    }
    catch (err) { 
        throw err;
    }

}

//(3). To delete data through mongoose
const deletData = async () => { 
    const deleteModel = mongoose.model("employees", EmployeeSchema);
    try {
        let data = await deleteModel.deleteOne({ Name: "Ronaldo" });
        console.log(data);
    }
    catch (err) { 
        throw err;
    }
}

// (4). Find or read data through mongoose
const findData = async() => { 
    const findModel = mongoose.model("employees", EmployeeSchema);
    try {
        let data = await findModel.find({ Name: "Akash" });
        console.log(data);

    }
    catch (err) { 
        throw err;
    }
}
//insert();
//update();
//deletData();
findData();