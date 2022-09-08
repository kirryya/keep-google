import React, { FC, memo, useContext } from 'react';

import { Container } from '@mui/material';

import { NoteContext } from '../../context';
import { WorkSpace } from '../../hoc';
import { ReturnComponentType } from '../../types';
import { createData } from '../../utils';

import { WorkSpaceTrash } from './WorkSpaceTrash';

export const TrashNotes: FC = memo((): ReturnComponentType => {
  const { trash, search } = useContext(NoteContext);

  const searched = createData(trash, search);

  return (
    <Container fixed style={{ paddingTop: '254px' }}>
      <WorkSpace searched={searched} Component={WorkSpaceTrash} />
    </Container>
  );
});
