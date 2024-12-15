import { DataTypes, Model } from "sequelize";
import sequelize from "../database";
import Order from "./Order";
import MenuItem from "./MenuItem";

class OrderMenuItem extends Model {
  public orderId!: number;
  public menuItemId!: number;
  public quantity!: number;
}

// Initialize the OrderMenuItem join table
OrderMenuItem.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: Order,
        key: "id",
      },
      primaryKey: true,
    },
    menuItemId: {
      type: DataTypes.INTEGER,
      references: {
        model: MenuItem,
        key: "id",
      },
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "OrderMenuItem",
    timestamps: false,
  }
);

// Define the relationships
// Define many-to-many relationships
// Define many-to-many relationships
Order.belongsToMany(MenuItem, {
  through: OrderMenuItem,
  foreignKey: "orderId",
});
MenuItem.belongsToMany(Order, {
  through: OrderMenuItem,
  foreignKey: "menuItemId",
});

export default OrderMenuItem;
