import { useAuthStore } from "@/stores/authStore";
import useOrderStore from "../stores/orderStore";
import { useNavigate } from "react-router-dom";

export const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  const { order, addItem, updateItemQuantity, resetOrder } = useOrderStore();
  const { email } = useAuthStore();

  return (
    <div className="w-44 h-56 bg-gray-100 rounded p-2 flex flex-col">
      <div className="h-32 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded"
          src="https://loremflickr.com/cache/resized/defaultImage.small_200_200_nofilter.jpg"
          alt={item.name}
        />
      </div>
      <div className="mt-auto">
        <h3 className="truncate font-semibold">{item.name}</h3>
        <p className="truncate">{item.description}</p>
        <p className="truncate font-medium">₹{item.price}</p>
        <button
          className="bg-pink-500 text-white py-2 rounded w-full"
          onClick={() => addItem(item.id, item.name, item.price)}
        >
          Add
        </button>
      </div>
      {email && (
        <div className="flex">
          <button
            onClick={() => navigate("/get-qr")}
            className="fixed bottom-16 right-36 pb-1 bg-pink-500 text-white hover:bg-pink-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl font-bold shadow-lg transition-transform transform hover:scale-110"
          >
            ⬇️
          </button>
          <button
            onClick={() => navigate("/additem")}
            className="fixed bottom-16 right-16 pb-1 bg-pink-500 text-white hover:bg-pink-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl font-bold shadow-lg transition-transform transform hover:scale-110"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
