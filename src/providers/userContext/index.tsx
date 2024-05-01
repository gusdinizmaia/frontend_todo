"use client";

import { iCategory, iTask } from "@/interfaces";
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
  taskSelected: iTask;
  setTaskSelected: Dispatch<SetStateAction<iTask>>;
}

const defaultCategories: iCategory[] = [
  { name: "service" },
  { name: "teste" },
  { name: "personal" },
];

const defaultTasks: iTask[] = [
  {
    title: "feira",
    description: "comprar verduras",
    date: "17/02/2001",
    duration: 120,
    status: "concluida",
  },
  {
    title: "cinema",
    description: "assistir um filme",
    date: "17/02/2004",
    duration: 120,
    status: "concluida",
  },
  {
    title: "dança",
    description: "dançar muito",
    date: "17/02/2011",
    duration: 120,
    status: "pendente",
  },
];

const userContextDefault: iUserContext = {
  categories: defaultCategories,
  setCategories: () => {},
  tasks: defaultTasks,
  setTasks: () => {},
  taskSelected: defaultTasks[0],
  setTaskSelected: () => {},
};

export const UserContext = createContext<iUserContext>(userContextDefault);

export function UserProvider({ children }: iUserContextProps) {
  const [tasks, setTasks] = useState<iTask[]>(defaultTasks);
  const [categories, setCategories] = useState<iCategory[]>(defaultCategories);
  const [taskSelected, setTaskSelected] = useState<iTask>(defaultTasks[0]);
  // const [taskSelected, setTaskSelected] = useState<iTask | null>(null);

  // const categories = defaultCategories;
  // const tasks = defaultTasks;

  function postTask(task: iTask) {
    //   const res = await fetch('https://api.example.com/...')
    //   if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    //   }
    //   return res.json()
  }
  function patchTask(task: iTask) {
    //   const res = await fetch('https://api.example.com/...')
    //   if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    //   }
    //   return res.json()
  }
  function deleteTask(task: iTask) {
    //   const res = await fetch('https://api.example.com/...')
    //   if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    //   }
    //   return res.json()
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
