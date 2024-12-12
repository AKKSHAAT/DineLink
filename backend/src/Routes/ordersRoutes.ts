import { Router, Request, Response } from "express";
import Order from "../models/Order";
import MenuItem from "../models/MenuItem";
import OrderMenuItem from "../models/OrderMenuItem";
import Restaurant from "../models/Restaurant";

const router = Router();

interface OrderItem {
  menuItemId: number;
  quantity: number;
}

async function addToOrderMenuItems(
  newOrder: Order,
  itemList: OrderItem[]
): Promise<any> {
  const orderMenuItems = itemList.map((item) => ({
    orderId: newOrder.id,
    menuItemId: item.menuItemId,
    quantity: item.quantity,
  }));
  return await OrderMenuItem.bulkCreate(orderMenuItems);
}

router.post("/", async (req: Request, res: Response) => {
  try {
    const { itemList, total, tableNo, restaurantId } = req.body;

    if (!itemList || !total || !restaurantId) {
      res.status(400).json({ msg: "Missing required fields" });
      return;
    }

    const newOrder = await Order.create({
      total,
      tableNo,
      restaurantId,
      status: "Pending",
    });
    await addToOrderMenuItems(newOrder, itemList);
    // await newOrder.addMenuItems(itemList);
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error creating order", error });
  }
});

// Get all orders for a specific restaurant (admin-facing route)
router.get("/restaurant/:restaurantId", async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;

    const orders = await Order.findAll({
      where: { restaurantId },
      include: [{
        model: MenuItem,
        through: {attributes: ['quantity']}
      }, Restaurant],
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching orders", error });
  }
});

// Get a single order by ID (admin or user-facing)
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id, {
      include: [Restaurant],
    });

    if (!order) {
      res.status(404).json({ msg: "Order not found" });
      return;
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching order", error });
  }
});

router.put("/:id/status", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      res.status(400).json({ msg: "Status is required" });
      return;
    }

    const order = await Order.findByPk(id);

    if (!order) {
      res.status(404).json({ msg: "Order not found" });
      return;
    }

    order.status = status;
    await order.save();

    res.status(200).json({ msg: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ msg: "Error updating order status", error });
  }
});

// Delete an order (admin-facing route)
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      res.status(404).json({ msg: "Order not found" });
      return;
    }

    await order.destroy();

    res.status(200).json({ msg: "Order deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting order", error });
  }
});

export default router;
