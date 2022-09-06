import { NoteType } from '../../../../types';

export type DeleteNotesType = {
  todolist: NoteType;
  removeTodolist: (id: string) => void;
};
