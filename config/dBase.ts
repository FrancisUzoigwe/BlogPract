import mongoose from "mongoose";
import env from "dotenv";
env.config()

const MongoString: string = process.env.APPLICATION_STRING!
export const dBase =() => {
    mongoose.connect(MongoString).then(() => {
        console.log("Database connection successfully established")
    })
}