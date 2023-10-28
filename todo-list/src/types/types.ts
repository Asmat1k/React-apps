export interface ToDo {
  id: number;
  isDone: boolean;
  title: string;
  text: string;
  time: string;
}

export interface ChangeToDo {
  title: string;
  text: string;
  time: string;
}
