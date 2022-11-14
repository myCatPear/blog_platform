import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'https://02task.vercel.app',
});
