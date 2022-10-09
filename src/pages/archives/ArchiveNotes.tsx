import React, { FC, useContext } from 'react';

import { Container } from '@mui/material';

import { WorkSpaceArchives } from './WorkSpaceArchives';

import { NoteContext } from 'context';
import { WorkSpace } from 'hoc';
import { ReturnComponentType } from 'types';
import { createData } from 'utils';

export const ArchiveNotes: FC = (): ReturnComponentType => {
  const { archives, search } = useContext(NoteContext);

  const searched = createData(archives, search);

  return (
    <Container fixed style={{ paddingTop: '254px' }}>
      <WorkSpace searched={searched} Component={WorkSpaceArchives} />
    </Container>
  );
};
