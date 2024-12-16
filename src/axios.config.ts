import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://dinelink.onrender.com/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally (e.g., logging errors)
axiosInstance.interceptors.response.use(
  (response) => response, // Handle response data
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized, please login again.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
