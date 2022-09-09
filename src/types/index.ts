export type { Nullable } from './Nullable';
export type { ReturnComponentType } from './ReturnComponentType';

export type TaskType = {
  id: string;
  title: string;
  content: string;
};

export type WorkSpaceType = {
  searched: TaskType[] | null;
};
