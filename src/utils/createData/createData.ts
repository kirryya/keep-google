import { TaskType } from '../../types';

export const createData = (notes: TaskType[], search: string): TaskType[] => {
  return notes.filter(
    tl =>
      tl.title.toLowerCase().includes(search.toLowerCase()) ||
      tl.content.toLowerCase().includes(search.toLowerCase()),
  );
};
