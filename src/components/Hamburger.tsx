import React from "react";
import { Link } from "react-router-dom";

export const Hamburger = () => {
  return (
    <div className="flex flex-col bg-pink-500 w-[15vw] min-h-[100vh] text-white font-semibold pt-4">
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/orders"}>Orders</Link>
      <Link to={"/cart"}>Cart</Link>
    </div>
  );
};
