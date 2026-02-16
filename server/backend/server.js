const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connect
mongoose.connect("mongodb://127.0.0.1:27017/libraryDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number
});

const Book = mongoose.model("Book", bookSchema);


//  Root Route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


// GET All Books
app.get("/api/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});


//  POST Add Book
app.post("/api/books", async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json({ message: "Book Added Successfully" });
});


//  PUT Update Book
app.put("/api/books/:id", async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Book Updated Successfully" });
});


//  DELETE Book
app.delete("/api/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book Deleted Successfully" });
});


// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
