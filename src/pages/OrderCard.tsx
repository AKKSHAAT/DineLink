import { useState } from "react";
import axiosInstance from "@/axios.config";

interface MenuItems {
  id: number;
  name: string;
  price: number;
}

interface Data {
  id: number;
  total: number;
  status: string;
  tableNo: number;
  restaurantId: number;
  MenuItems: MenuItems[];
}

export const OrderCard = ({ data }: { data: Data[] }) => {
  const [orders, setOrders] = useState<Data[]>(data);

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      // Send PUT request to the backend to update the status
      const response = await axiosInstance.put(`order/${id}/status`, { status: newStatus });

      if (response.status === 200) {
        // Update the order status in the local state
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === id ? { ...order, status: newStatus } : order
          )
        );
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id} className="p-4 mb-4 bg-white shadow rounded">
          <p className="font-bold">Order No: {order.id}</p>
          <div className="mb-2">
            <label className="font-semibold mr-2">Status:</label>
            <select
              value={order.status}
              onChange={(e) => handleStatusChange(order.id, e.target.value)}
              className="border p-1 rounded"
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <p className="text-xs text-gray-700">Table No: {order.tableNo}</p>
          {order.MenuItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b-2 py-1">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
          <p className="font-semibold mt-2">Total: ₹{order.total}</p>
        </div>
      ))}
    </div>
  );
};
