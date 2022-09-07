import { createContext, ReactNode, useMemo, useState } from 'react';

import { ReturnComponentType, NoteType } from '../types';

import { ContextType } from './types';

export const noteContextDefaultValue: ContextType = {
  notes: [],
  setNotes: () => [],
  archives: [],
  setArchives: () => [],
  trash: [],
  setTrash: () => [],
  search: '',
  setSearch: () => {},
};

export const NoteContext = createContext<ContextType>(noteContextDefaultValue);

export const NotesProvider = ({
  children,
}: {
  children: ReactNode;
}): ReturnComponentType => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [archives, setArchives] = useState<NoteType[]>([]);
  const [trash, setTrash] = useState<NoteType[]>([]);
  const [search, setSearch] = useState<string>('');

  const value = useMemo(
    () => ({
      notes,
      setNotes,
      archives,
      setArchives,
      trash,
      setTrash,
      search,
      setSearch,
    }),
    [notes, setNotes, archives, setArchives, trash, setTrash, search, setSearch],
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
