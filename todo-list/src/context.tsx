/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { ChangeToDo, ToDo } from './types/types';

interface DefaultValue {
  toDoList: ToDo[];
  toDoEditId: number;
  markToDoItem(id: number): void;
  chooseToDoForEdit(id: number): void;
  saveInLocalStorage(): void;
  removeToDoItem(id: number): void;
  createToDoItem(newToDoItem: ToDo): void;
  changeToDoItem({ title, text, time }: ChangeToDo): void;
}

export const Context = React.createContext<DefaultValue>({
  toDoList: [],
  toDoEditId: -1,
  saveInLocalStorage() {},
  markToDoItem() {},
  chooseToDoForEdit() {},
  removeToDoItem() {},
  createToDoItem() {},
  changeToDoItem() {},
});
