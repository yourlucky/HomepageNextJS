import { MongoClient } from "mongodb";

const API_KEY = process.env.MONGO_DB_KEY;

if(!API_KEY){
  throw new Error("MONGODB API Key cannot be found.");
}

const url = API_KEY;
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
