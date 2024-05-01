"use client";

import { UserContext } from "@/providers/userContext";
import { useContext } from "react";
import ModalEdit from "../ModalEdit";
import ModalDelete from "../ModalDelete";
import ModalCreate from "../ModalCreate";
import Link from "next/link";

interface iModal {
  children: JSX.Element;
}

export default function Modal({ children }: iModal) {
  const { tasks, taskSelected } = useContext(UserContext);

  return (
    <>
      <dialog className={`flex justify-center fixed w-full h-screen z-0`}>
        <div className=" w-screen h-screen fixed bg-gray-500/80 z-10"></div>
        <div className="py-8 px-12 overflow-y-auto bg-white min-w-24 min-h-20 w-full max-w-[600px] mx-6  max-h-[500px] h-fit mt-14 rounded-3xl flex z-30 items-start justify-center">
          {/* <ModalEdit
              title={taskSelected?.title}
              date={taskSelected?.date}
              description={taskSelected?.description}
              duration={taskSelected?.duration}
              status="pendente"
            /> */}
          {/* <Link href="/">
            <button className="cursor-pointer bg-gray-500 rounded-md px-4 py-2">
              Cancelar
            </button>
          </Link> */}
          {/* <ModalDelete /> */}
          {/* <ModalCreate /> */}
          {children}
        </div>
      </dialog>
    </>
  );
}
