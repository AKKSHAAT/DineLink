import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database";

// Define User attributes interface (for type safety in the application)
interface UserAttributes {
  id: number;
  name: string;
  age: number;
}

// Define optional attributes for creation (id can be optional)
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public age!: number;
}

// Initialize the Sequelize model with database column types
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, // Sequelize column type
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER, // Sequelize column type
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
