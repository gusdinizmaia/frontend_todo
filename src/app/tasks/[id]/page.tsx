"use client";

import { iTask } from "@/interfaces";
import { UserContext } from "@/providers/userContext";
import { instance } from "@/services/axios";
import { useContext, useEffect, useState } from "react";

interface iTasksPageProps {
  params: {
    id: number;
  };
}

// export async function generateStaticParams() {
//   const response = await instance
//     .get(`tasks`)
//     .then((res) => {
//       // if (!res.ok) {
//       //   throw new Error("Failed to fetch data");
//       // }
//       return res.data;
//     })
//     .catch((err) => console.log(err));

//   return response.map((task: any) => ({ id: Number(task.id) }));
// }

export default function TasksPage({ params }: iTasksPageProps) {
  const { listOneTask } = useContext(UserContext);
  const [task, setTask] = useState<iTask | null>(null);

  // useEffect(() => {
  //   async function a() {
  //     const response = await listOneTask(params.id);
  //     console.log(response);
  //     setTask(await response.data);
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //   }

  //   a();
  // });

  return (
    <>
      <main className="bg-gray-600  w-full flex min-h-screen flex-col gap-5 md:flex-row items-center gap-x-5 justify-between py-10 px-[8%] md:items-start ">
        <section className="w-full flex flex-col items-center gap-5 bg-gray-500 rounded-3xl p-6 max-h-[400px] md:max-h-screen h-[505px] ">
          {/* <h2>{task?.title}</h2>
          <p>{task?.description}</p>
          <p>{task?.duration}</p>
          <p>{task?.date}</p>
          <p>{task?.status}</p> */}
          <h1>Página de Tasks</h1>
        </section>
      </main>
    </>
  );
}
