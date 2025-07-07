import axios from 'axios';

const api = axios.create({
  baseURL: 'bookmark-backend-production-76cd.up.railway.app/api',
  withCredentials: true
});

export default api;