import Restaurant from "../models/Restaurant";

export const seedRestaurants = async (): Promise<void> => {
  const restaurantsData = [
    {
      name: "Pasta Paradise",
      email: "pasta@paradise.com",
      password: "securepass123",
      address: "123 Noodle Street, Flavor Town",
    },
    {
      name: "Burger Barn",
      email: "contact@burgerbarn.com",
      password: "burgerlove2023",
      address: "456 Patty Lane, Grill City",
    },
    {
      name: "Sushi Central",
      email: "info@sushicentral.com",
      password: "fishyfish",
      address: "789 Rice Road, Oceanville",
    },
  ];

  try {
    await Restaurant.bulkCreate(restaurantsData);
    console.log("Dummy restaurants created successfully!");
  } catch (error) {
    console.error("Error seeding restaurants:", error);
  }
};
