import {NoteType} from "../../../../types";

export type TodolistPropsType = {
    todolist: NoteType
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    changeTodolistNote: (id: string, newNote: string) => void
    addTodolistTitle: (id: string, newTitle: string) => void
}