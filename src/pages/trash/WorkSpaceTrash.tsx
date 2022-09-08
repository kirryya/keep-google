import React, { memo, useCallback, useContext } from 'react';

import { Box, Grid, Paper } from '@mui/material';

import { NoteContext } from '../../context';
import style from '../../styles/Paper.module.css';
import { ReturnComponentType, WorkSpaceType } from '../../types';

import { TrashNote } from './TrashNote';

export const WorkSpaceTrash: React.FC<WorkSpaceType> = memo(
  ({ searched }: WorkSpaceType): ReturnComponentType => {
    const { trash, setTrash } = useContext(NoteContext);

    const removeTodolist = useCallback(
      (id: string) => {
        setTrash(trash.filter((tl: { id: string }) => tl.id !== id));
      },
      [trash, setTrash],
    );

    return (
      <Grid container spacing={3}>
        {searched?.map(tl => {
          return (
            <Grid item key={tl.id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper className={style.appearance} elevation={3}>
                    <TrashNote todolist={tl} removeTodolist={removeTodolist} />
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
