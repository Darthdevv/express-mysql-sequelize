import express from 'express';
import dbConnection from './db/database.js';
import User from './models/user.model.js';

const app = express();

app.use(express.json());

dbConnection();
User

const port = 8000;
app.listen(port, () => {
  console.log('app listening on port ', port)
})