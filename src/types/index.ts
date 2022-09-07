export type { Nullable } from './Nullable';
export type { ReturnComponentType } from './ReturnComponentType';

export type NoteType = {
  id: string;
  title: string;
  note: string;
};

export type WorkSpaceType = {
  searched: NoteType[] | null;
};
