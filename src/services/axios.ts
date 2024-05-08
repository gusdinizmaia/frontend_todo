import axios from "axios";
import "dotenv/config";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

// console.log(process.env.BASE_URL);
