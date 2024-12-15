import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./database";
import cors from "cors";

import userRoutes from "./Routes/userRoutes";
import restaurantRotes from "./Routes/restaurantRoutes";
import menuRoutes from "./Routes/MenuRoutes";
import categoryRoutes from "./Routes/CategoryRoutes";
import orderRoutes from "./Routes/ordersRoutes";
import { seedRestaurants } from "./seeders/createRestaurants";
import { seedCategory } from "./seeders/createCatogries";
import { seedMenuItems } from "./seeders/createMenuItems";

dotenv.config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "5000", 10);

app.use(cors());
app.use(express.json());
app.use("/api/res", restaurantRotes);
app.use("/api/user", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);

sequelize.sync({ force: true }).then(async () => {
  console.log("Database connected and models synced!");
  await seedRestaurants();
  await seedCategory();
  await seedMenuItems();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

app.get("/", async (req, res) => {
  res.json({ msg: "helloo" });
});
