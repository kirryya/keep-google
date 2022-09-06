import React, { FC, useContext } from 'react';

import { Container } from '@mui/material';

import { NoteContext } from '../../../context/Context';
import { WorkSpace } from '../../../hoc/WorkSpace';
import { ReturnComponentType } from '../../../types';
import { createData } from '../../../utils/createData';

import { WorkSpaceArchives } from './WorkSpaceArchives';

export const Archives: FC = (): ReturnComponentType => {
  const { archives, search } = useContext(NoteContext);

  const searched = createData(archives, search);

  return (
    <Container fixed style={{ paddingTop: '274px' }}>
      <WorkSpace searched={searched} Component={WorkSpaceArchives} />
    </Container>
  );
};
