import express from 'express';
import dbConnection from './db/database.js';

const app = express();


app.use(express.json());









dbConnection();



const port = 8000;
app.listen(port, () => {
  console.log('app listening on port ', port)
})