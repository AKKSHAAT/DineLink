import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";
import Category from "./Category";

// MenuItem attributes interface
interface MenuItemAttributes {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  categoryId?: number; // Foreign key for Category
}

// Optional attributes for menu item creation (id can be optional)
interface MenuItemCreationAttributes extends Optional<MenuItemAttributes, "id"> {}

class MenuItem
  extends Model<MenuItemAttributes, MenuItemCreationAttributes>
  implements MenuItemAttributes
{
  public id!: number;
  public name!: string;
  public description?: string;
  public price!: number;
  public image?: string;
  public categoryId?: number;
}

// Initialize the MenuItem model
MenuItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "id",
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "MenuItem",
    timestamps: true,
  }
);

// Define association
MenuItem.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(MenuItem, { foreignKey: "categoryId" });

export default MenuItem;
