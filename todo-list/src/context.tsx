/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"
import { ToDo } from "./types/types";

interface DefaultValue {
  toDoList: ToDo[],
  saveInLocalStorage(): void,
  removeToDoItem(todo: ToDo): void;
  createToDoItem(newToDoItem: ToDo): void;
  changeToDoItem(oldToDo: ToDo, newToDo: ToDo, isCheckedChanged: boolean): void;
}

export const Context = React.createContext<DefaultValue>({
  toDoList: [],
  saveInLocalStorage(){},
  removeToDoItem(){},
  createToDoItem(){},
  changeToDoItem(){},
});
