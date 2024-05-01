export interface iCategory {
  name: string;
}

export interface iTask {
  title: string;
  description: string;
  date: string;
  duration: number;
  status: "concluida" | "pendente";
}
