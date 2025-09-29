import express from "express";
import cors from "cors";
// import { Configuration, OpenAIApi } from "openai";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {MongoClient,ObjectId} from "mongodb";

dotenv.config();

const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI
const DB_NAME = process.env.DB_NAME || "afya_connect";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


if (!MONGO_URI || !OPENAI_API_KEY){
    console.error("Set OPENAI_API_KEY and MONGO_URI in .env file");
    process.exit(1);
}


const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(MONGO_URI);
await client.connect();
const db = client.db(DB_NAME);
const conversationsCollection = db.collection("conversations");
const documentsCollection = db.collection("documents");
const usersCollection = db.collection("users");


console.log("Connected to MongoDB:", DB_NAME);


