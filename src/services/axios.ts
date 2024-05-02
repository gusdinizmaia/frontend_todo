import axios from "axios";
import "dotenv/config";

export const instance = axios.create({
  baseURL: "https://backend-todo-6pn3.onrender.com/api/",
  timeout: 14000,
  headers: { "Content-Type": "application/json" },
});

// console.log(process.env.BASE_URL);
