const express = require('express');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./modals/Photo');
const mongoose = require('mongoose');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const photoControllers = require('./controllers/photoControllers')
const pageController = require('./controllers/pageController')

const app = express();

mongoose.connect('mongodb://localhost/pcat-test-db');

app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', photoControllers.getAllPhotos);
app.get('/photos/:id', photoControllers.getOnePhoto);
app.post('/photos', photoControllers.createPhoto);
app.put('/photos/:id', photoControllers.updatePhoto);
app.delete('/photos/:id', photoControllers.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port}, Başlatıldı`);
});
