"use client";

import Image from "next/image";
import Categories from "@/components/Categories";
import TodayTasks from "@/components/TodayTasks";
import Search from "@/components/Search";
import Date from "@/components/Date";
import Notify from "@/components/Notify";
import NavBar from "@/components/NavBar";
import Modal from "@/components/Modal";
import { useContext } from "react";
import { UserContext } from "@/providers/userContext";
import ButtonCreateTask from "@/components/ButtonCreateTask";
import Filters from "@/components/Filters";
import ModalEdit from "@/components/ModalEdit";
import ModalCreate from "@/components/ModalCreate";
import ModalDelete from "@/components/ModalDelete";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const { taskSelected } = useContext(UserContext);
  const editTask = searchParams?.editTask;
  const createTask = searchParams?.createTask;
  const deleteTask = searchParams?.deleteTask;

  return (
    <>
      {editTask && (
        <Modal>
          <ModalEdit
            title={taskSelected?.title}
            date={taskSelected?.date}
            description={taskSelected?.description}
            duration={taskSelected?.duration}
            status="pendente"
          />
        </Modal>
      )}
      {createTask && (
        <Modal>
          <ModalCreate />
        </Modal>
      )}
      {deleteTask && (
        <Modal>
          <ModalDelete
            title={taskSelected?.title}
            date={taskSelected?.date}
            description={taskSelected?.description}
            duration={taskSelected?.duration}
            status="pendente"
          />
        </Modal>
      )}
      <header className="bg-gray-600 w-full md: pt-10 px-[8%]">
        <nav className="rounded-3xl w-full flex items-center justify-between h-8 md:h-16 md:px-6 md:bg-gray-500 ">
          <div>
            <NavBar />
          </div>
          <div className="flex gap-3">
            <Search />
            <Notify />
          </div>
        </nav>
      </header>
      <main className="bg-gray-600  w-full flex min-h-screen flex-col md:flex-row items-center gap-10 py-10 px-[8%] md:items-start ">
        <div className="w-full flex flex-col gap-5 md:max-h-[650px]">
          <section className="w-full flex flex-col items-center gap-5 bg-gray-500 rounded-3xl p-6">
            <h2>Filtros</h2>
            <Filters />
          </section>
          <section className="w-full flex flex-col items-center gap-5 bg-gray-500 rounded-3xl p-6">
            <h2>Categories</h2>
            <Categories />
          </section>
        </div>
        <section className="w-full flex flex-col items-center gap-5 bg-gray-500 rounded-3xl p-6 max-h-[400px] md:max-h-screen h-[505px] ">
          <h2>Today List</h2>
          <TodayTasks />
        </section>
        <ButtonCreateTask searchParams={searchParams} />
      </main>
    </>
  );
}
