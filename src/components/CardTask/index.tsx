"use client";

import { UserContext } from "@/providers/userContext";
import { useContext } from "react";
import { iTask } from "@/interfaces";
import EditIcon from "../EditIcon";
import TrashIcon from "../TrashIcon";
import Link from "next/link";

export default function CardTask(task: iTask) {
  const { setTaskSelected } = useContext(UserContext);

  return (
    <li
      key={task.id}
      className="relative cursor-pointer flex justify-between items-center bg-gray-400 w-full h-10 rounded-lg px-2 py-2"
    >
      <div
        onClick={() => console.log("cliquei no card")}
        className="absolute h-full w-full z-10 top-0 left-0"
      />
      <h2 className="">{task.title}</h2>
      <div className="flex h-full gap-2 z-30 items-center">
        <Link href="/?editTask=true">
          <EditIcon className=" cursor-pointer rounded w-8 h-8 z-30 bg-gray-700 hover:bg-gray-800" />
        </Link>
        <Link href="/?deleteTask=true" onClick={() => setTaskSelected(task)}>
          <TrashIcon className=" cursor-pointer rounded w-8 h-8 z-30 bg-gray-700 hover:bg-gray-800 " />
        </Link>
      </div>
    </li>
  );
}
