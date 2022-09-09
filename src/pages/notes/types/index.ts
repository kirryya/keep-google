import { TaskType } from 'types';

export type NoteType = {
  todolist: TaskType;
  removeTask: (id: string) => void;
  changeTaskTitle: (id: string, newTitle: string) => void;
  changeTaskContent: (id: string, newContent: string) => void;
  addTaskTitle: (id: string, newTitle: string) => void;
};

export type ButtonsBarType = {
  removeTask: () => void;
  addTitle?: () => void;
  title?: string;
  moveToArchive: () => void;
  moveToTrash: () => void;
  copyTodolist: () => void;
};
