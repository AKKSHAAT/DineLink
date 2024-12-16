import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useOrderStore from "../stores/orderStore";
import { useAuthStore } from "../stores/authStore";

export const Hamburger = () => {
  const navigate = useNavigate();
  const { email, logout } = useAuthStore();
  const { order } = useOrderStore();

  return (
    <div className="flex flex-col gap-4 bg-pink-600 w-60 min-h-[100vh] text-white font-semibold pt-6 px-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Menu</h2>

      <div className="flex items-center justify-between hover:bg-pink-700 px-4 py-2 rounded transition">
        <Link to={"/menu"} className="w-full">
          Menu
        </Link>
        {email && (
          <button
            onClick={() => navigate("/additem")}
            className="bg-white text-pink-600 hover:bg-gray-200 rounded-full w-10 h-8 flex pb-1 items-center justify-center font-bold transition"
          >
            +
          </button>
        )}
      </div>

      {email && (
        <Link
          to={"/orders"}
          className="hover:bg-pink-700 px-4 py-2 rounded transition"
        >
          Orders
        </Link>
      )}

      <div className="flex items-center justify-between hover:bg-pink-700 px-4 py-2 rounded transition">
        <Link to={"/cart"} className="w-full">
          Cart
        </Link>
        <span className="bg-white text-pink-600 rounded-full w-10  h-8 flex items-center justify-center font-bold">
          {order.itemList?.length}
        </span>
      </div>

      {email && (
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="mt-auto mb-4 bg-red-400 hover:bg-white hover:text-black px-4 py-2 rounded transition text-white"
        >
          Logout
        </button>
      )}
    </div>
  );
};
