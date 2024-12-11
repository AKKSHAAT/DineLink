import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

interface RestaurantAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  address?: string; // Optional field for city
}

interface RestaurantCreationAttributes
  extends Optional<RestaurantAttributes, "id"> {}

class Restaurant
  extends Model<RestaurantAttributes, RestaurantCreationAttributes>
  implements RestaurantAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public address?: string;
}

// Initialize the model
Restaurant.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Restaurant",
    timestamps: true,
  }
);

export default Restaurant;
