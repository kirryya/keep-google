import React from 'react';

import { TaskType } from '../../../types';

export type WorkSpaceType = {
  Component: React.ElementType<{ searched: TaskType[] | null }>;
  searched: TaskType[] | null;
};
