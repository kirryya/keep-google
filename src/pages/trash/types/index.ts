import { TaskType } from '../../../types';

export type DeleteNotesType = {
  todolist: TaskType;
  removeTask: (id: string) => void;
};
