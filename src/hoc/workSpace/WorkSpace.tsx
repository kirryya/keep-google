import React, { FC, memo } from 'react';

import { WorkSpaceType } from './types';

import { EmptyNotes } from 'components';
import { ReturnComponentType } from 'types';

export const WorkSpace: FC<WorkSpaceType> = memo(
  ({ Component, searched }: WorkSpaceType): ReturnComponentType => {
    return searched && searched.length > 0 ? (
      <Component searched={searched} />
    ) : (
      <EmptyNotes />
    );
  },
);
