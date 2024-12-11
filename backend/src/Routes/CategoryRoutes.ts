import express, { Request, Response } from "express";
import Category from "../models/Category";

const router = express.Router();

// Create a new category
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const category = await Category.create({ name, description });
    res.status(201).json({ msg: "Category created", category });
  } catch (error) {
    res.status(500).json({ msg: "Error creating category", error });
  }
});

// Get all categories
router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching categories", error });
  }
});

export default router;
