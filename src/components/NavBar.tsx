import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export const NavBar = () => {
  const { email, logout } = useAuthStore();

  return (
    <nav className="flex mb-2 gap-4 justify-end items-center px-8 py-3 bg-white shadow-md">
      {email ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">
            Welcome, <span className="text-pink-500">{email}</span>
          </span>
          <button
            onClick={logout}
            className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="px-4 py-2 bg-pink-500 text-white rounded-md font-medium hover:bg-pink-600 transition duration-200"
        >
          Login as a Restaurant
        </Link>
      )}
    </nav>
  );
};
