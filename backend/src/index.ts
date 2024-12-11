import express, { Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./database";
import User from "./models/User";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
  console.log("Database connected and models synced!");

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

app.get("/", async (req, res) => {
  res.json({ msg: "helloo" });
});

app.post("/:user", async (req: Request, res: Response) => {
  try {
    const { user } = req.params;
    const newUser = await User.create({ name: user, age: 20 });
    res.status(201).json({ msg: "user Created", user: newUser });
  } catch (error) {
    res.status(201).json({ msg: "cannot create user", error});
  }
});
