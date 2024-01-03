import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from 'cors';
import connectDB from "../Task1/config/connectDB.js";

const app = express()
const port = process.env.PORT;
const DATABASE_URL =process.env.DATABASE_URL;

app.use(cors());


app.listen(port, () => {
    console.log("Server is working on the port no:", port); 
})