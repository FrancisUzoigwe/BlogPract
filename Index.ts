import express, {Application} from "express";
import env from "dotenv";
import { mainApp } from "./mainApp";
import { dBase } from "./config/dBase";
env.config()

const app: Application = express();

const Port: number = parseInt(process.env.APPLICATION_PORT!);
const realPort = Port

mainApp(app)
const Server = app.listen(realPort, () => {
    dBase()
})

process.on("uncaughtException", (err) => {
    console.log("")
    console.log("Server is shutting down due to uncaught exception", err)

    process.exit(1)
})

process.on("unhandeledRejection", (reason) => {
    console.log("")
    console.log("Server is shutting down due to unhandled rejection", reason)

    Server.close(() => {
        process.exit(1)
    })
})