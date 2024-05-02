"use client";

import { UserContext } from "@/providers/userContext";
import { useContext } from "react";
import ModalEdit from "../ModalEdit";
import ModalDelete from "../ModalDelete";
import { iTask } from "@/interfaces";
import EditIcon from "../EditIcon";
import TrashIcon from "../TrashIcon";
import Link from "next/link";

export default function CardTask(task: iTask) {
  const { setTaskSelected } = useContext(UserContext);

  return (
    <li
      key={task.id}
      className="flex justify-between bg-gray-400 w-full h-10 rounded-lg px-2 py-2"
    >
      <h2 className="">{task.title}</h2>
      <div className="flex gap-2">
        <Link href="/?editTask=true">
          <EditIcon
            onClick={() => {
              setTaskSelected(task);
              // setViewModal(true);
              // setContentModal(() => ModalEdit(task));
            }}
          />
        </Link>
        <Link href="/?deleteTask=true">
          <TrashIcon
            onClick={() => {
              console.log("clicou");
              setTaskSelected(task);
              // setViewModal(true);
              // setContentModal(() => ModalDelete(task));
            }}
          />
        </Link>
      </div>
    </li>
  );
}
