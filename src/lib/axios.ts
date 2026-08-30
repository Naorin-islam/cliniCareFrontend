import axios from 'axios';

const api = axios.create({
  baseURL: process.env['NEXT_PUBLIC_CROS-LIVE-BACKEND'] || process.env.NEXT_PUBLIC_CROS_LIVE_BACKEND || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to add the auth token header to every request
api.interceptors.request.use(
  (config) => {
    // We only access localStorage in the browser
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle global errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors globally (e.g., redirect to login)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // Uncomment the line below to redirect automatically on 401
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
