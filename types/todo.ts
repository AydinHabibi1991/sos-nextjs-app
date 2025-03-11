export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  export type FilterOption = "all" | "completed" | "incomplete";