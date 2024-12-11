import express, { Request, Response } from "express";
import MenuItem from "../models/MenuItem";

const router = express.Router();

/** 
 * GET all menu items 
 */
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const menuItems = await MenuItem.findAll();
    res.status(200).json({ msg: "Menu items retrieved", menuItems });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching menu items", error });
  }
});

/** 
 * POST a new menu item 
 */
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, price, image } = req.body;
    const newMenuItem = await MenuItem.create({ name, description, price, image });
    res.status(201).json({ msg: "Menu item created", menuItem: newMenuItem });
  } catch (error) {
    res.status(500).json({ msg: "Error creating menu item", error });
  }
});

/** 
 * PUT (update) a menu item by ID 
 */
router.put("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description, price, image } = req.body;

    const menuItem = await MenuItem.findByPk(id);
    if (!menuItem) {
      res.status(404).json({ msg: "Menu item not found" });
      return;
    }

    await menuItem.update({ name, description, price, image });
    res.status(200).json({ msg: "Menu item updated", menuItem });
  } catch (error) {
    res.status(500).json({ msg: "Error updating menu item", error });
  }
});

/** 
 * DELETE a menu item by ID 
 */
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const menuItem = await MenuItem.findByPk(id);
    if (!menuItem) {
      res.status(404).json({ msg: "Menu item not found" });
      return;
    }

    await menuItem.destroy();
    res.status(200).json({ msg: "Menu item deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting menu item", error });
  }
});

export default router;
