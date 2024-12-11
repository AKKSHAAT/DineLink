import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./database";

import userRoutes from './Routes/userRoutes';
import restaurantRotes from './Routes/restaurantRoutes';
import menuRoutes from './Routes/MenuRoutes'

dotenv.config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "5000", 10);
app.use(express.json());
app.use("/api/res", restaurantRotes);
app.use("/api/user", userRoutes); 
app.use("/api/menu", menuRoutes);



sequelize.sync({}).then(() => {
  console.log("Database connected and models synced!");

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

app.get("/", async (req, res) => {
  res.json({ msg: "helloo" });
});

