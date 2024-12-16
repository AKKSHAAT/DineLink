import axiosInstance from "@/axios.config";
import { useAuthStore } from "@/stores/authStore";
import useOrderStore from "@/stores/orderStore";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { order } = useOrderStore();
  const navigate = useNavigate();
  const {email} = useAuthStore();

  async function sendOrder() {
    const o = { ...order, restaurantId: 1 };
    const res = await axiosInstance.post("/order", o);
    console.log("Res: ", res);
    if(email) {
      navigate("/orders");
    } else {
      navigate("/order-complete");
    }
  }

  if (order.itemList.length === 0)
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
        Your cart is empty
      </p>
    );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Your Cart
      </h2>

      <div className="space-y-4">
        {order?.itemList?.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold capitalize text-gray-700">
                {item.menuItemName}
              </p>
              <p className="text-sm text-gray-500">
                Qty: <strong>{item.quantity}</strong>
              </p>
            </div>
            <p className="text-gray-700 font-medium">
              ₹{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <p className="text-lg font-bold text-gray-800 flex justify-between">
          <span>Total:</span>
          <span>₹{order.total.toFixed(2)}</span>
        </p>
      </div>
      

      <button
        onClick={sendOrder}
        className="w-full mt-6 bg-primary text-white bg-pink-500 py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-200"
      >
        Place Order
      </button>
    </div>
  );
};
