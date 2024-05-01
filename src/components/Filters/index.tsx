"use client";

import { useContext } from "react";
import CardCategory from "../CardCategory";
import { UserContext } from "@/providers/userContext";
import CardFilter from "../CardFilter";

// async function getCategories() {
//   const res = await fetch('https://api.example.com/...')

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default function Filters() {
  const { categories } = useContext(UserContext);

  return (
    <ul className="w-full flex flex-row md:flex-col gap-4 overflow-x-auto">
      {categories.map((elem) => CardFilter(elem))}
    </ul>
  );
}
