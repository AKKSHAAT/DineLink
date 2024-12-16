import { create } from 'zustand';

interface Item {
  menuItemId: number;
  menuItemName: string;
  price: number;
  quantity: number;
}

interface Order {
  itemList: Item[];
  total: number;
  tableNo: number;
  restaurantId: number;
}

// Define the zustand store
interface OrderState {
  order: Order;
  setOrder: (order: Order) => void;
  addItem: (menuItemId: number, menuItemName: string, price: number, quantity?: number) => void;
  updateItemQuantity: (menuItemId: number, quantity: number) => void;
  resetOrder: () => void;
  getTotal: () => number;
}

const useOrderStore = create<OrderState>((set, get) => ({
  order: {
    itemList: [],
    total: 0,
    tableNo: 0,
    restaurantId: 0,
  },

  setOrder: (order) => set({ order }),

  addItem: (menuItemId, menuItemName, price, quantity = 1) =>
    set((state) => {
      const existingItem = state.order.itemList.find((item) => item.menuItemId === menuItemId);

      let updatedItemList = [...state.order.itemList];

      if (existingItem) {
        // If the item already exists, increase the quantity
        updatedItemList = updatedItemList.map((item) =>
          item.menuItemId === menuItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If the item does not exist, add it to the list
        updatedItemList.push({ menuItemId, menuItemName, price, quantity });
      }

      const updatedTotal = updatedItemList.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return {
        order: {
          ...state.order,
          itemList: updatedItemList,
          total: updatedTotal,
        },
      };
    }),

  updateItemQuantity: (menuItemId, quantity) =>
    set((state) => {
      const updatedItemList = state.order.itemList.map((item) =>
        item.menuItemId === menuItemId ? { ...item, quantity } : item
      );

      const updatedTotal = updatedItemList.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return {
        order: {
          ...state.order,
          itemList: updatedItemList,
          total: updatedTotal,
        },
      };
    }),

  getTotal: () => {
    const state = get();
    return state.order.itemList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  resetOrder: () =>
    set({
      order: {
        itemList: [],
        total: 0,
        tableNo: 0,
        restaurantId: 0,
      },
    }),
}));

export default useOrderStore;
