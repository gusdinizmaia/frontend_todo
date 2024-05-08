"use client";

import { UserContext } from "@/providers/userContext";
import { useContext, useRef } from "react";
import ModalEdit from "../ModalEdit";
import ModalDelete from "../ModalDelete";
import ModalCreate from "../ModalCreate";
import Link from "next/link";
import { ManageContext } from "@/providers/manageContext";
import { createPortal } from "react-dom";

interface iModal {
  children: JSX.Element;
}

export default function Modal({ children }: iModal) {
  const { setOpenModal } = useContext(ManageContext);
  const modalRef = useRef();
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  return createPortal(
    <dialog className={`flex justify-center fixed w-full h-screen z-0`}>
      <div className=" w-screen h-screen fixed bg-gray-500/80 z-10"></div>
      <div
        onClick={(e) => closeModal(e)}
        className="py-8 px-12 overflow-y-auto bg-white min-w-24 min-h-20 w-full max-w-[600px] mx-6  max-h-[500px] h-fit mt-14 rounded-3xl flex z-30 items-start justify-center"
      >
        {children}
      </div>
    </dialog>,
    document.body
  );
}
