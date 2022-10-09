import React, { FC, memo, useCallback, useContext } from 'react';

import { Box, Grid, Paper } from '@mui/material';

import style from '../../styles/Paper.module.css';

import { Note } from './Note';

import { NoteContext } from 'context';
import { ReturnComponentType, WorkSpaceType } from 'types';

export const WorkSpaceNotes: FC<WorkSpaceType> = memo(
  ({ searched }: WorkSpaceType): ReturnComponentType => {
    const { notes, setNotes } = useContext(NoteContext);

    const removeTask = useCallback(
      (id: string) => {
        setNotes(notes.filter(tl => tl.id !== id));
      },
      [notes, setNotes],
    );

    const changeTaskTitle = useCallback(
      (id: string, title: string) => {
        setNotes(notes.map(tl => (tl.id === id ? { ...tl, title } : tl)));
      },
      [notes, setNotes],
    );

    const changeTaskContent = useCallback(
      (id: string, content: string) => {
        setNotes(notes.map(tl => (tl.id === id ? { ...tl, content } : tl)));
      },
      [notes, setNotes],
    );

    return (
      <Grid container spacing={3}>
        {searched?.map(({ id, title, content }) => {
          return (
            <Grid item key={id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper className={style.appearance} elevation={3}>
                    <Note
                      todolist={{ id, title, content }}
                      removeTask={removeTask}
                      changeTaskTitle={changeTaskTitle}
                      changeTaskContent={changeTaskContent}
                      addTaskTitle={changeTaskTitle}
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
