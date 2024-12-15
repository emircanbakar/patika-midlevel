const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRouter");
const courseRoute = require("./routes/courseRouter");
const categoryRoute = require("./routes/categoryRouter")

const app = express();

mongoose
  .connect("mongodb://localhost/smartedu-db")
  .then(() => console.log("DB connected!"));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute)

app.listen(3000, () => {
  console.log("server ayakta!");
});
