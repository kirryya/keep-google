import { Dispatch, SetStateAction } from 'react';

import { TaskType } from '../../types';

export type ContextType = {
  notes: TaskType[];
  setNotes: Dispatch<SetStateAction<TaskType[]>>;
  archives: TaskType[];
  setArchives: Dispatch<SetStateAction<TaskType[]>>;
  trash: TaskType[];
  setTrash: Dispatch<SetStateAction<TaskType[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
