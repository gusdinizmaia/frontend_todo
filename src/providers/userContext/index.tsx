"use client";

import { iCategory, iFormTask, iTask } from "@/interfaces";
import { instance } from "@/services/axios";
import { all } from "axios";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  categories: iCategory[];
  setCategories: Dispatch<SetStateAction<iCategory[] | []>>;
  tasks: iTask[];
  setTasks: Dispatch<SetStateAction<iTask[] | []>>;
  taskSelected: iTask | null;
  setTaskSelected: Dispatch<SetStateAction<iTask | null>>;
  listTasks: () => Promise<iTask[] | any>;
  createTask: (task: iFormTask) => Promise<iTask | any>;
  listOneTask: (taskId: number) => Promise<iTask[] | any>;
  editTask: (
    taskId: number,
    taskData: Partial<iFormTask>
  ) => Promise<iTask | any>;
  deleteTask: (taskId: number) => Promise<any>;
}

const userContextDefault: iUserContext = {
  categories: [],
  setCategories: () => {},
  tasks: [],
  setTasks: () => {},
  taskSelected: null,
  setTaskSelected: () => {},
  listTasks: async () => [],
  createTask: async () => null,
  listOneTask: async () => null,
  editTask: async () => null,
  deleteTask: async () => null,
};

export const UserContext = createContext<iUserContext>(userContextDefault);

export function UserProvider({ children }: iUserContextProps) {
  const [tasks, setTasks] = useState<iTask[]>([]);
  const [categories, setCategories] = useState<iCategory[]>([]);
  const [taskSelected, setTaskSelected] = useState<iTask | null>(null);
  // const [taskSelected, setTaskSelected] = useState<iTask | null>(null);

  // const categories = defaultCategories;
  // const tasks = defaultTasks;

  async function listTasks(): Promise<iTask[]> {
    const allTasks = await instance
      .get(`tasks`)
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Failed to fetch data");
        // }

        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });

    setTasks(allTasks);

    return allTasks;
  }

  async function createTask(taskData: iFormTask): Promise<iTask> {
    const newTask = await instance
      .post(`tasks`, taskData)
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Failed to fetch data");
        // }
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });

    setTasks((tasks) => [...tasks, newTask]);

    return newTask;
  }
  async function editTask(
    taskId: number,
    taskData: Partial<iFormTask>
  ): Promise<iTask> {
    const newTask = await instance
      .patch(`tasks/${taskId}`, taskData)
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Failed to fetch data");
        // }
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });

    setTasks((allTasks) => {
      const index = allTasks.findIndex((elem) => elem.id === taskId);
      allTasks[index] = newTask;
      return [...allTasks];
    });

    return newTask;
  }
  async function listOneTask(taskId: number): Promise<iTask> {
    return await instance
      .get(`tasks/${taskId}`)
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Failed to fetch data");
        // }
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
  async function deleteTask(taskId: number): Promise<void> {
    await instance
      .delete(`tasks/${taskId}`)
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Failed to fetch data");
        // }

        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });

    setTasks((allTasks) => {
      const newTasks = allTasks.filter((elem) => elem.id !== taskId);
      console.log(newTasks);
      return [...newTasks];
    });

    return;
  }

  return (
    <UserContext.Provider
      value={{
        categories,
        setCategories,
        tasks,
        setTasks,
        taskSelected,
        setTaskSelected,
        listTasks,
        listOneTask,
        createTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
