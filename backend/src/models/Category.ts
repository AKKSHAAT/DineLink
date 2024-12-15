import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

// Category attributes interface
interface CategoryAttributes {
  id: number;
  name: string;
  description?: string;
}

// Optional attributes for category creation (id can be optional)
interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  public id!: number;
  public name!: string;
  public description?: string;
}

// Initialize the Category model
Category.init(
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
  },
  {
    sequelize,
    modelName: "Category",
    timestamps: true,
  }
);

export default Category;
