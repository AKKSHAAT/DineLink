import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios.config";
import { useAuthStore } from "../stores/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("res/login", { email, password });
      const data = await response.data;

      if (response.status === 200) {
        console.log("Logged in");
        setAuth(data.token, email); // Store token and email in Zustand
        navigate("/dashboard");
      } else {
        setErrorMessage(data.msg);
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {errorMessage && <div className="mb-4 text-red-500 text-center">{errorMessage}</div>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="w-full bg-primary text-primary-foreground">
          Login
        </button>
        <div className="text-center mt-4">
          <span className="text-sm text-muted">Don't have an account?</span>
          <a href="/register" className="text-primary font-medium"> Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
