import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

// Interface for Menu attributes
interface MenuAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string; // Optional field for the image URL
}

// Interface for creating a Menu item (id is optional)
interface MenuCreationAttributes extends Optional<MenuAttributes, "id"> {}

class MenuItem extends Model<MenuAttributes, MenuCreationAttributes> implements MenuAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public image?: string;
}

// Initialize the model
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
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "MenuItem",
    timestamps: true,
  }
);

export default MenuItem;
