export interface iCategory {
  name: string;
}

export interface iTask {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  status: "concluded" | "pendant";
}

export type iFormTask = Omit<iTask, "status" | "id">;
