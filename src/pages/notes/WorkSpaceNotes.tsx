import React, { FC, memo, useCallback, useContext } from 'react';

import { Box, Grid, Paper } from '@mui/material';

import { NoteContext } from '../../context';
import style from '../../styles/Paper.module.css';
import { ReturnComponentType, WorkSpaceType } from '../../types';

import { Note } from './Note';

export const WorkSpaceNotes: FC<WorkSpaceType> = memo(
  ({ searched }: WorkSpaceType): ReturnComponentType => {
    const { notes, setNotes } = useContext(NoteContext);

    const removeTodolist = useCallback(
      (id: string) => {
        setNotes(notes.filter(tl => tl.id !== id));
      },
      [notes, setNotes],
    );

    const changeTodolistTitle = useCallback(
      (id: string, title: string) => {
        setNotes(notes.map(tl => (tl.id === id ? { ...tl, title } : tl)));
      },
      [notes, setNotes],
    );

    const changeTodolistNote = useCallback(
      (id: string, note: string) => {
        setNotes(notes.map(tl => (tl.id === id ? { ...tl, note } : tl)));
      },
      [notes, setNotes],
    );

    return (
      <Grid container spacing={3}>
        {searched?.map(({ id, title, note }) => {
          return (
            <Grid item key={id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper className={style.appearance} elevation={3}>
                    <Note
                      todolist={{ id, title, note }}
                      removeTodolist={removeTodolist}
                      changeTodolistTitle={changeTodolistTitle}
                      changeTodolistNote={changeTodolistNote}
                      addTodolistTitle={changeTodolistTitle}
                    />
                  </Paper>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  },
);