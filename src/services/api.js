import axios from "axios";

export const api = axios.create({
  baseURL: "http://backendportfolio-cnty.onrender.com"
});