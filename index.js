import express from "express";
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express()

app.use(router);
app.set('view engine','jade') // set default view engine as html

app.listen(PORT || 3000, () =>{
    console.log('App running on port '+ PORT);
} )

