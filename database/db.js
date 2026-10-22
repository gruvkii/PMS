import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("", {
        dbName: "PMS",
    }).then(()=>{
        console.log("Database Connection successful! ")
    }).catch(error=>{
        console.log("Error connecting to Database", error);
    })
}