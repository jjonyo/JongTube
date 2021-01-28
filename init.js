import app from "./app";
import dotenv from "dotenv";
import "./db";
dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";


const PORT = process.env.PORT || 4000;
const handleListening= ()=>console.log(`Listening on`);

app.listen(PORT,handleListening);