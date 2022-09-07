import { NoteType } from 'types';

export type NotePropsType = {
  todolist: NoteType;
  removeTodolist: (id: string) => void;
  changeTodolistTitle: (id: string, newTitle: string) => void;
  changeTodolistNote: (id: string, newNote: string) => void;
  addTodolistTitle: (id: string, newTitle: string) => void;
};

export type ButtonsBarType = {
  removeTodolist: () => void;
  addTitle?: () => void;
  title?: string;
  moveToArchive: () => void;
  moveToTrash: () => void;
  copyTodolist: () => void;
};
