const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db');

//creating schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'lorem ipsum dolor sit amet 2',
// });

//read then catch ile kullanımı async olarakta yapılabilir
// Photo.find({})
//   .then((photos) => {
//     console.log('All Photos:', photos);
//   })
//   .catch((err) => {
//     console.error('Error:', err);
//   });

//update güncel kullanımı
// (async () => {
//  const id = '67474353eacb75eb7f3d7978';
//   try {
//     const updatedPhoto = await Photo.findByIdAndUpdate(
//       id,
//       {
//         title: 'photo 2 updated data',
//         description: 'lorem ipsum 2 updated',
//       },
//       { new: true } // Bu, güncellenmiş dökümanı döndürür.
//     );
//     console.log('Updated Photo:', updatedPhoto);
//   } catch (err) {
//     console.error('Error updating photo:', err);
//   }
// })();

//delete a photo
// (async () => {
//   const id = '67474353eacb75eb7f3d7978'; // Silmek istediğiniz dökümanın ID'si
//   try {
//     const deletedPhoto = await Photo.findByIdAndDelete(id);
//     if (deletedPhoto) {
//       console.log('Deleted Photo:', deletedPhoto);
//     } else {
//       console.log('Photo not found');
//     }
//   } catch (err) {
//     console.error('Error deleting photo:', err);
//   }
// })();
