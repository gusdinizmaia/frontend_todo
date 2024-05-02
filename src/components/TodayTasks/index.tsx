import CardTask from "../CardTask";
import { useContext, useEffect } from "react";
import { UserContext } from "@/providers/userContext";

export default function TodayTasks() {
  const { tasks, listTasks } = useContext(UserContext);

  useEffect(() => {
    async function list() {
      await listTasks();
    }
    list();
  }, []);

  return (
    <ul className=" flex flex-col gap-4 overflow-y-auto w-full">
      {tasks.map((elem) => CardTask(elem))}
    </ul>
  );
}
