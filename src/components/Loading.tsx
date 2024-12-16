import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-pink-500 border-solid rounded-full animate-spin border-t-transparent"></div>
      <p>the backend is hosted on Render.com free tier this might take some time</p>
    </div>
  );
};

export default Loading;
