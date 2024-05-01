"use client";

import { UserContext } from "@/providers/userContext";
import { useContext, useState } from "react";
import ModalCreate from "@/components/ModalCreate";
import Link from "next/link";
import TrashIcon from "../TrashIcon";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function ButtonCreateTask({ searchParams }: SearchParamProps) {
  const [validate, setValidate] = useState(Object.keys(!searchParams));

  return (
    validate.length === 0 && (
      <div className="relative">
        <Link href="/?createTask=true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="cursor-pointer fixed bottom-8 right-[5%] w-16 h-16 bg-gray-400  border-solid border-black border- rounded-full border-2"
            onClick={() => setValidate(Object.keys(!searchParams))}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
    )
  );
}
