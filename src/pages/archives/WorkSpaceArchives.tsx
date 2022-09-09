import React, { FC, memo, useCallback, useContext } from 'react';

import { Box, Grid, Paper } from '@mui/material';

import { NoteContext } from '../../context';
import style from '../../styles/Paper.module.css';
import { WorkSpaceType } from '../../types';

import { ArchiveNote } from './ArchiveNote';

export const WorkSpaceArchives: FC<WorkSpaceType> = memo(
  ({ searched }: WorkSpaceType) => {
    const { archives, setArchives } = useContext(NoteContext);

    const removeTask = useCallback(
      (id: string): void => {
        setArchives(archives.filter((tl: { id: string }) => tl.id !== id));
      },
      [setArchives, archives],
    );

    return (
      <Grid container spacing={3}>
        {searched?.map(({ id, title, content }) => {
          return (
            <Grid item key={id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper className={style.appearance} elevation={3}>
                    <ArchiveNote
                      todolist={{ id, title, content }}
                      removeTask={removeTask}
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
