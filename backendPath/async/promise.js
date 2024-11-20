// const promise1 = new Promise((resolve, reject) => {
//   resolve("promise resolved");
//   reject("reject");
// });

// console.log(promise1);

// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const books = [
  { name: "book1", author: "yazar1" },
  { name: "book2", author: "yazar2" },
  { name: "book3", author: "yazar3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((res, rej) => {
    books.push(newBook);
    // res(books);
    rej('hata')
  });
  return promise1;
};

addBook({ name: "book6", author: "yazar4" })
  .then(() => {
    console.log("yeni liste");
    listBooks();
  })
  .catch((err) => console.log(err));
