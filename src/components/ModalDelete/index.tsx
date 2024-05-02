"use client";

import { iTask } from "@/interfaces";
import { UserContext } from "@/providers/userContext";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useContext } from "react";

export default function ModalDelete(task: iTask) {
  const { tasks, setTasks } = useContext(UserContext);

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  function removeTask() {
    // const index = tasks.indexOf(task);

    // tasks.splice(index, 1);

    console.log(task);

    setTasks((allTasks) => {
      const newTasks = allTasks.filter((elem) => elem.id !== task.id);
      console.log(newTasks);
      return [...newTasks];
    });
  }

  return (
    <div
      className="flex flex-col items-center
    justify-center gap-5 z-index-30"
    >
      <h2 className="text-black text-center">
        Tem certeza que deseja deletar essa tarefa?
      </h2>
      <div className="flex gap-4">
        <Link href="/">
          <button className="cursor-pointer bg-gray-500 rounded-md px-4 py-2">
            Cancelar
          </button>
        </Link>
        <Link href="/" onClick={() => removeTask()}>
          <button className="bg-red-500 rounded-md px-4 py-2">Sim</button>
        </Link>
      </div>
    </div>
  );
}
