"use client";

import { UserContext } from "@/providers/userContext";
import { useContext, useState } from "react";
import { iFormTask, iTask } from "@/interfaces";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

const schemaFormCreateTask = yup
  .object({
    title: yup.string().required("É necessário conter um titulo"),
    description: yup.string().required("É necessário conter uma descrição"),
    date: yup.string().required("É necessário fornecer uma data"),
    duration: yup.string().required("É necessário uma duração"),
  })
  .required();

export default function ModalCreate() {
  const { createTask, setTasks } = useContext(UserContext);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaFormCreateTask),
  });

  const addTask: SubmitHandler<iFormTask> = async (task) => {
    const newTask = await createTask(task);

    setTasks((tasks) => [...tasks, newTask]);
  };

  return (
    <div
      className="relative pb-8 flex flex-col items-center
    justify-start gap-5 z-30 w-full h-full"
    >
      <h1 className="text-4xl text-black mt-8 text-center">Crie sua tarefa</h1>
      <form className=" flex flex-col w-full gap-6 py-8 items-center" action="">
        <label htmlFor="" className="text-2xl text-black text-center">
          Titulo
        </label>
        <input
          className="text-base text-center py-2 text-black w-full rounded-md border-solid border-2 border-gray-500 h-fit"
          type="text"
          {...register("title")}
        />
        <p className="text-center w-full text-red-400 text-xs">
          {errors.title?.message}
        </p>
        <label htmlFor="" className="text-2xl  text-black text-center">
          Descrição
        </label>
        <textarea
          className="text-black p-2 w-full rounded-md border-solid border-2 border-gray-500 h-fit"
          id=""
          cols={20}
          rows={10}
          {...register("description")}
        ></textarea>
        <p className="text-center w-full text-red-400 text-xs">
          {errors.description?.message}
        </p>

        <label htmlFor="" className="text-2xl text-black text-center">
          Data
        </label>
        <input
          className="text-black w-36 py-2 text-center rounded-md border-solid border-2 border-gray-500 h-fit"
          type="text"
          {...register("date")}
        />
        <p className="text-center w-full text-red-400 text-xs">
          {errors.date?.message}
        </p>

        <label htmlFor="" className="text-2xl text-black text-center">
          Duração
        </label>
        <input
          className="text-black w-36 py-2 text-center rounded-md border-solid border-2 border-gray-500 h-fit"
          type="time"
          {...register("duration")}
        />
        <p className="text-center w-full text-red-400 text-xs">
          {errors.duration?.message}
        </p>

        <div className=" flex gap-4 absolute right-0 bottom-0">
          <Link href="/" onClick={handleSubmit(addTask)}>
            <button
              type="submit"
              className="cursor-pointer bg-blue-500 rounded-md px-4 py-2"
            >
              Criar
            </button>
          </Link>
          <Link href="/">
            <button className="cursor-pointer bg-gray-500 rounded-md px-4 py-2">
              Cancelar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
