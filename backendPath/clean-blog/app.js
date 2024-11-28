const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();

mongoose.connect('mongodb://localhost/clean-blog');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const addblog = await Post.find({});
  res.render('index', { addblog });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/addblog', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
