const express = require('express');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./modals/Photo');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/pcat-test-db');

app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', { photos });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port}, Başlatıldı`);
});
