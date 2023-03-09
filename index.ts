import express from "express"
import mongoose, { Error } from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import personRoute from "./src/routes/person"

const app = express();
dotenv.config()


const MONGOURL = process.env.MONGO_URL as string;
const MONGOPORT = process.env.PORT as string;

app.use(cors());
app.use(express.json());
app.use('/p', personRoute);


mongoose.connect(MONGOURL)
        .then(() => console.log(MONGOURL))
        .catch((e: Error) => console.log(e))

app.listen(MONGOPORT, () => {
    console.log("Application connected on port", MONGOPORT)
})