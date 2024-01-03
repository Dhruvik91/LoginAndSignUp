import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
         const DB_OPTIONS = {
            dbName: "MongoDb"
         }
         await mongoose.connect(DATABASE_URL, DB_OPTIONS)
         console.log("Successfully connected!!!")
    } catch (error) {
        console.log(error);
    }
};