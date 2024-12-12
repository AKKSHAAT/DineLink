import Category from "../models/Category";

export const seedCategory = async (): Promise<void> => {
  const categoryData = [
    {
      name: "food"
    },
    {
        name: "dessert"
    },
    {
        name: "we are not sure"
    },
  ];

  try {
    await Category.bulkCreate(categoryData);
    console.log("Dummy categoryData created successfully!");
  } catch (error) {
    console.error("Error categoryData", error);
  }
};
