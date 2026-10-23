import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_DB_URI, {
        dbName: "PMS",
    }).then(()=>{
        console.log("Database Connection successful! ")
    }).catch(error=>{
        console.log("Error connecting to Database", error);
    })
}