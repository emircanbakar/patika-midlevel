// javascript senkron - single thread çalısır.

// const func1 = ( ) =>{
//     console.log("fun1");
// }

// const func2 = ( ) =>{
//     console.log("fun2");
// }

// func2()
// func1()

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

// setTimeout(()=>{
//     listBooks();
// }, 2000)

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
  //callback ile listbook fonk çağırdık kitap eklendiğinde fonk çalısacak
};

addBook({ name: "book4", author: "yazar4" }, listBooks);

// listBooks()