import express from 'express';
import dbConnection from './db/database.js';
import User from './models/user.model.js';
import Post from './models/post.model.js';
import Comment from './models/comment.model.js';

const app = express();

app.use(express.json());

dbConnection();
User
Post
Comment

const port = 8000;
app.listen(port, () => {
  console.log('app listening on port ', port)
})