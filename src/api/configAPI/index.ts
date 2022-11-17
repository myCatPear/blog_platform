import axios from 'axios';

export const apiConfig = axios.create({
  baseURL: 'https://homework2-six.vercel.app/api',
});
