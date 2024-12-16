import React from "react";

export const OrderComplete = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center animate-fade-in">
        <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-green-100 animate-bounce-in">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-4">
          Your order is being prepared, wait a little
        </p>
        <button
          onClick={() => window.location.href = "/menu"}
          className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
