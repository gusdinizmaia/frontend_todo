import { iCategory } from "@/interfaces";

export default function CardCategory(category: iCategory) {
  return (
    <li className="bg-gray-400 flex flex-col md:flex-row gap-1 md:gap-6 w-full justify-center md:justify-between rounded-xl px-4 md:px-6 py-4 md:py-2 ">
      <h2 className="">{category.name}</h2>
      <h3>2/3</h3>
    </li>
  );
}
