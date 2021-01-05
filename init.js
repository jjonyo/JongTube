import app from "./app";
import dotenv from "dotenv";
import "./db";
import "./models/Video";

dotenv.config();

const PORT = process.env.PORT || 4000;
const handleListening= ()=>console.log(`Listening on`);

app.listen(PORT,handleListening);