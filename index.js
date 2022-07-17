import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'
import router from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.set('view engine','jade') // set default view engine as html
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(PORT || 3000, () =>{
    console.log('App running on port '+ PORT);
} )

