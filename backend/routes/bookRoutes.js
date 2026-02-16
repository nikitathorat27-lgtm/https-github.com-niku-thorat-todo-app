import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// Add Book
router.post("/", async (req, res) => {
  const { title, author } = req.body;
  const book = await Book.create({ title, author });
  res.json(book);
});

// Get Books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

export default router;
