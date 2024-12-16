import axiosInstance from "@/axios.config";
import useOrderStore from "@/stores/orderStore";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { order } = useOrderStore();
  const navigate = useNavigate();

  async function sendOrder() {
    const o = { ...order, restaurantId: 1 };
    const res = await axiosInstance.post("/order", o);
    console.log("Res: ", res);
    navigate("/orders");
  }
  if (order.itemList.length === 0) return <p>cart is empty</p>;
  return (
    <div>
      {order?.itemList?.map((item, i) => {
        return (
          <div key={i} className="flex justify-between items-center mb-2">
            <div>
              <p className="font-semibold capitalize">{item.menuItemName}</p>
              <p>
                Qty: <strong>{item.quantity}</strong>
              </p>
            </div>
            <p>₹{item.price * item.quantity}</p>
          </div>
        );
      })}
      <p className="font-semibold">Total: {order.total}</p>
      <button onClick={sendOrder}>Place Order</button>
    </div>
  );
};
