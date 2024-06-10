import express from 'express';
import dbConnection from './db/database.js';
import User from './models/user.model.js';
import Post from './models/post.model.js';
import Comment from './models/comment.model.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';

const app = express();

app.use(express.json());

dbConnection();
User
Post
Comment

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

const port = 8000;
app.listen(port, () => {
  console.log('app listening on port ', port)
})