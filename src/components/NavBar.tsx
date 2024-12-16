import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export const NavBar = () => {
  const { email, logout } = useAuthStore();

  return (
    <nav className="flex mb-5 gap-3 justify-end items-center">
      {email ? (
        <>
          <span className="text-gray-700">Welcome, {email}</span>
          <button
            onClick={logout}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="text-primary font-medium">Login</Link>
          <Link to="/register" className="text-primary font-medium">Register</Link>
        </>
      )}
    </nav>
  );
};
