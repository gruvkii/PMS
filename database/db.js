import mongoose from "mongoose";

export const connectDB = () => {
    return mongoose.connect(process.env.MONGO_DB_URI, {
        dbName: "PMS",
    }).then(() => {
        console.log("Database connection successful!");
    });
};