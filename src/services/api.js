import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-backend-5xdx.onrender.com"
});