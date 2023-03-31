import axios from 'axios';

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-type": "application/json" }
};

export default axios.create(config);
