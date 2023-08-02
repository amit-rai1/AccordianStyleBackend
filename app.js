import express from 'express'
import bodyParser from 'body-parser'
const app = express();
import cors from 'cors'
import {mongoconnection} from './db';
mongoconnection();
app.use(cors({origin:"*"}));


const dataRoute = require('./router/dataRoute');
// const dataRoute = require("./")

app.use(bodyParser.urlencoded(
    {
        extended:true
    }));
app.use(bodyParser.json());



app.use('/api/data', dataRoute);

export default app;