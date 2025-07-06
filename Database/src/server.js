import "dotenv/config";
import connectDB from "./config/db.js";
import express, { json } from "express";
import morgan from "morgan";
import moviesRouter from "./routers/movies.js";

const server = express();

connectDB();

server.use(express.json());
server.use(morgan("dev"));
server.use("/movies", moviesRouter);

server.get("/", (request, response)=>{
    response.status(204).send();
});



server.listen(4000, ()=>{
    console.log("Server is running at http://localhost on port 4000");
})