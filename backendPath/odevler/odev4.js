const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name" : "Employee 1 Name" , "salary" : "2000"}',
  "utf-8",
  (err, data) => {
    if (err) console.log(err);
  }
);

fs.readFile("./employees.json", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data, "employee data");
});

// fs.appendFile(
//   "employees.json",
//   '{"name" : "Employee 2 Name" , "salary" : "3000"}',
//   "utf-8",
//   (err) => {
//     if (err) console.log(err);
//   }
// );

const updatedData = '{"name": "Employee 1 Updated Name", "salary": 3000}';

fs.writeFile("employees.json", updatedData, "utf8", (err) => {
  if (err) {
    console.error("Dosya güncellenirken hata oluştu:", err);
  } else {
    console.log("Dosya başarıyla güncellendi.");
  }
});

fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
});
