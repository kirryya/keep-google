import { NoteType } from '../../../../types';

export type ArchiveType = {
  todolist: NoteType;
  removeTodolist: (id: string) => void;
};
