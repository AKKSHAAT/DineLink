import {
  DataTypes,
  Model,
  Optional,
  BelongsToManyAddAssociationMixin,
} from "sequelize";
import sequelize from "../database";
import Restaurant from "./Restaurant";
import MenuItem from "./MenuItem";
import OrderMenuItem from "./OrderMenuItem";

// Order attributes interface
interface OrderAttributes {
  id: number;
  total: number;
  status?: string;
  tableNo?: number;
  restaurantId: number;
}

// Optional attributes for order creation (id can be optional)
interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public id!: number;
  public total!: number;
  public status?: string;
  public tableNo?: number;
  public restaurantId!: number;

  public addMenuItems!: BelongsToManyAddAssociationMixin<MenuItem, number>;
}

// Initialize the Order model
Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tableNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      references: {
        model: Restaurant,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
    timestamps: true,
  }
);

Order.belongsTo(Restaurant, { foreignKey: "restaurantId" });

export default Order;
