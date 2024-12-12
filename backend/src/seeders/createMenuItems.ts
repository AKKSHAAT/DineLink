import MenuItem from "../models/MenuItem";

export const seedMenuItems = async (): Promise<void> => {
  const menuItemsData = [
    {
      name: "margeretta pizza",
      description: "cheese sauce basil",
      price: 70,
      categoryId: 1,
    },
    {
        name: "Mountain dew pizza",
        description: "Mountain dew cheese, Mountain dew sauce, Mountain dew",
        price: 100,
        categoryId: 1,
    },
    {
        name: "tiramisu",
        description: "think coffee cake",
        price: 70,
        categoryId: 2,
    },
  ];

  try {
    await MenuItem.bulkCreate(menuItemsData);
    console.log("Dummy menu items created successfully!");
  } catch (error) {
    console.error("Error menu items", error);
  }
};
