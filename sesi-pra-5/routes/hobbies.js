import express from 'express'
import Hobby from "../models/hobbies"

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await Hobby.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router
