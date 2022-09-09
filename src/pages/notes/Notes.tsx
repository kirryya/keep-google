import React, { FC, memo, useCallback, useContext } from 'react';

import { Container, Grid } from '@mui/material';
import { v1 } from 'uuid';

import { AddItemForm } from '../../components';
import { NoteContext } from '../../context';
import { WorkSpace } from '../../hoc';
import { ReturnComponentType } from '../../types';
import { createData } from '../../utils';

import { WorkSpaceNotes } from './WorkSpaceNotes';

export const Notes: FC = memo((): ReturnComponentType => {
  const { notes, setNotes, search } = useContext(NoteContext);

  const searched = createData(notes, search);

  const addNote = useCallback(
    (title: string, content: string) => {
      setNotes([{ id: v1(), title, content }, ...notes]);
    },
    [notes, setNotes],
  );

  return (
    <Container fixed>
      <Grid container style={{ padding: '100px' }}>
        <AddItemForm addItem={addNote} />
      </Grid>

      <WorkSpace searched={searched} Component={WorkSpaceNotes} />
    </Container>
  );
});
