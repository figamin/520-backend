import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
//import cookieParser from "cookie-parser";
import cors from "cors"

import reservRoute from "./routes/reservations.js"

const app = express();
dotenv.config();

const PORT = 5050;
//const PORT = process.env.PORT || 5050;

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://dvarughese:sp1a9PlMAPCyqIZ6@rest.juofv40.mongodb.net/employees?retryWrites=true&w=majority');
        //await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

app.get('/', (req, res) => { res.send('Hello from Express!') });

//middlewares
//app.use(cookieParser())
app.use(express.json());
app.use(helmet());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(morgan("common"));

app.use("/api/reservations", reservRoute);

app.listen(PORT, () => {
    console.log("Listening on port 5050");
    connect();
});