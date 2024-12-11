import express, { Request, Response } from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await User.findAll({});
    res.status(201).json({ msg: "user Created", allUsers });
  } catch (error) {
    res.status(201).json({ msg: "cannot create user", error });
  }
});

router.post("/:user", async (req: Request, res: Response): Promise<void> => {
  try {
    const { user } = req.params;
    const newUser = await User.create({ name: user, age: 20 });
    res.status(201).json({ msg: "user Created", user: newUser });
  } catch (error) {
    res.status(201).json({ msg: "cannot create user", error });
  }
});

export default router;
