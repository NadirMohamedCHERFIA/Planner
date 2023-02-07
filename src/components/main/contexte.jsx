import { createContext } from "react";
import { toDoListExp } from "./toDoList";
const todoLocal = JSON.parse(localStorage.getItem('todolist')) ? JSON.parse(localStorage.getItem('todolist')) : toDoListExp;
export const toDoListContext = createContext(todoLocal)