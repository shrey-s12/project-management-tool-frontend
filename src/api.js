import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3020/api', // Adjust to your API base URL
});

export default api;
