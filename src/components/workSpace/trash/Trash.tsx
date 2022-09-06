import React, { FC, memo, useContext } from 'react';

import { Container } from '@mui/material';

import { NoteContext } from '../../../context/Context';
import { WorkSpace } from '../../../hoc/WorkSpace';
import { ReturnComponentType } from '../../../types';
import { createData } from '../../../utils/createData';

import { WorkSpaceTrash } from './WorkSpaceTrash';

export const Trash: FC = memo((): ReturnComponentType => {
  const { trash, search } = useContext(NoteContext);

  const searched = createData(trash, search);

  return (
    <Container fixed style={{ paddingTop: '274px' }}>
      <WorkSpace searched={searched} Component={WorkSpaceTrash} />
    </Container>
  );
});
