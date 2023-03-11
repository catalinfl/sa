import express from "express"
import mongoose, { Error } from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import personRoute from "./src/routes/person"
import personQueryRoute from './src/routes/querySearch'

const app = express();
dotenv.config()


const MONGOURL = process.env.MONGO_URL as string;
const MONGOPORT = process.env.PORT as string;

app.use(cors());
app.use(bodyParser.json())
app.use('/', personRoute);
app.use('/', personQueryRoute)


mongoose.connect(MONGOURL)
        .then(() => console.log(MONGOURL))
        .catch((e: Error) => console.log(e))

app.listen(MONGOPORT, () => {
    console.log("Application connected on port", MONGOPORT)
})