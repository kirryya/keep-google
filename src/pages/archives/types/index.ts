import { TaskType } from '../../../types';

export type ArchiveNoteType = {
  todolist: TaskType;
  removeTask: (id: string) => void;
};
