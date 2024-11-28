const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const postController = require('./controllers/postController')

const app = express();
mongoose.connect('mongodb://localhost/clean-blog');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', postController.getAllPosts);
app.get('/addblog/:id', postController.getOnePost);
app.post('/addblog', postController.createPost);

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
