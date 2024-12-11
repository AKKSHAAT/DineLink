import sequelize from "../database";
import { seedRestaurants } from "./createRestaurants";

const runSeeders = async () => {
  try {
    await sequelize.sync({ force: true }); // This will drop and recreate tables
    console.log("Database synced!");

    await seedRestaurants(); // Call the seeding function
    console.log("Seeding completed!");
  } catch (error) {
    console.error("Error running seeders:", error);
  } finally {
    await sequelize.close();
  }
};

runSeeders();
