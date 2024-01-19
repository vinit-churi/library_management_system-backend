import Book from "../models/book.js";

export const getAllBooks = async (req, res) => {
  try {
    const searchParams = req.query;
    let query = {};
    if (searchParams?.sort === "new") {
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      console.log(tenMinutesAgo);
      query = { createdAt: { $gte: tenMinutesAgo } };
    } else if (searchParams?.sort === "old") {
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      console.log(tenMinutesAgo);
      query = { createdAt: { $lt: tenMinutesAgo } };
    }
    const books = await Book.find(query);
    console.log("====================================");
    console.log(searchParams);
    console.log(books);
    console.log("====================================");
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getBookById = async (req, res) => {
  console.log(req.params.id);
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ message: "Invalid ID" });
  }
};

export const updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send();
    }
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send();
  }
};
