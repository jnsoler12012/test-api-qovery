import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import dotenv from "dotenv"

import { notFound, errorHandler } from './middleware.js';
import api from './api/index.js';
import dataBaseConnection from './dataBaseConnection.js';


const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(json());

app.get('/', async (req, res) => {
    const [result, data] = await dataBaseConnection.query('SELECT NOW()')
    res.json({
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
        other: result[0]?.now
    });
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);


try {
    
    await dataBaseConnection
        .authenticate()
        .then(async () => {
            const [result, data] = await dataBaseConnection.query('SELECT NOW()')
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
        })

} catch (error) {
    console.log(error);
}


export default app;