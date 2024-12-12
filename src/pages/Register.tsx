import React, { useState } from "react";
import axiosInstance from "@/axios.config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axiosInstance.post("res/register", { name, email, password, address });

    const data = await response.data;
    if (response.status === 201) {
      navigate("/login");
    } else {
      console.log(response.status);
      setErrorMessage(data.msg);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your restaurant name"
          />
        </div>
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your restaurant address"
          />
        </div>
        <button type="submit" className="w-full bg-primary text-primary-foreground">
          Register
        </button>
        <div className="text-center mt-4">
          <span className="text-sm text-muted">Already have an account?</span>
          <a href="/login" className="text-primary font-medium"> Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
