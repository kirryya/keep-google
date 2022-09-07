import React from 'react';

import { NoteType } from '../../../types';

export type WorkSpaceType = {
  Component: React.ElementType<{ searched: NoteType[] | null }>;
  searched: NoteType[] | null;
};
