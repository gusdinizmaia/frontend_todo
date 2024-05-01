"use client";

import CardTask from "../CardTask";
import { useContext } from "react";
import { UserContext } from "@/providers/userContext";

export default function TodayTasks() {
  const { tasks } = useContext(UserContext);

  return (
    <ul className=" flex flex-col gap-4 overflow-y-auto w-full">
      {tasks.map((elem) => CardTask(elem))}
    </ul>
  );
}
