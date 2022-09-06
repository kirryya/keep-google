import React, { FC, memo, useCallback, useContext } from 'react';

import { Box, Grid, Paper } from '@mui/material';

import { NoteContext } from '../../../context/Context';
import { WorkSpacePropsType } from '../../../types';

import { Archive } from './Archive';

export const WorkSpaceArchives: FC<WorkSpacePropsType> = memo(
  ({ searched }: WorkSpacePropsType) => {
    const { archives, setArchives } = useContext(NoteContext);

    const removeTodolist = useCallback(
      (id: string): void => {
        setArchives(archives.filter((tl: { id: string }) => tl.id !== id));
      },
      [setArchives, archives],
    );

    return (
      <Grid container spacing={3}>
        {searched?.map(({ id, title, note }) => {
          return (
            <Grid item key={id}>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%' }}>
                  <Paper
                    style={{ padding: '20px', maxWidth: '250px', borderRadius: '8px' }}
                    elevation={3}
                  >
                    <Archive
                      todolist={{ id, title, note }}
                      removeTodolist={removeTodolist}
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
