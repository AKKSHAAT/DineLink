import React from "react";
import { Link,  useNavigate  } from "react-router-dom";
import useOrderStore from '../stores/orderStore';
import { useAuthStore } from "../stores/authStore";

export const Hamburger = () => {
  const navigate = useNavigate();
  const { email, logout } = useAuthStore();
  const {order} = useOrderStore();
  return (
    <div className="flex flex-col gap-2 bg-pink-500 w-[15vw] min-h-[100vh] text-white font-semibold pt-4">
      <Link to={"/menu"}>Menu{email &&
        <>
          <button
            onClick={()=>navigate('/additem')}
            className="hover:text-red-700 font-medium bg-white rounded-full text-pink-500 pb-1 px-2 mx-2"
          >
            +
          </button>
        </>
        
      }</Link>
      <Link to={"/orders"}>Orders</Link>
      <div className="flex">
        
      <Link to={"/cart"}>Cart 
      </Link>
      <p className="hover:text-red-700 font-medium bg-white rounded-full text-pink-500 pb-1 px-2 mx-2">
      {order.itemList?.length}
      </p>
        </div>
    </div>
  );
};
