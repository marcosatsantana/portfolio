import axios from "axios";

export const api = axios.create({
  baseURL: "https://naughty-dog-sweatpants.cyclic.app"
});