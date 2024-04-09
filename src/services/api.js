import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-vercel-afgy6fx39-marcos-projects-b670cedd.vercel.app/"
});