import { Dispatch, SetStateAction } from 'react';

import { NoteType } from '../../types';

export type ContextType = {
  notes: NoteType[];
  setNotes: Dispatch<SetStateAction<NoteType[]>>;
  archives: NoteType[];
  setArchives: Dispatch<SetStateAction<NoteType[]>>;
  trash: NoteType[];
  setTrash: Dispatch<SetStateAction<NoteType[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
