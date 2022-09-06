import React, { memo, useCallback, useContext } from 'react';

import { Box, Grid, Paper } from '@mui/material';

import { NoteContext } from '../../../context';
import { WorkSpacePropsType } from '../../../types';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { DeleteNotes } from './DeleteNotes';

export const WorkSpaceTrash: React.FC<WorkSpacePropsType> = memo(
  ({ searched }): ReturnComponentType => {
    const { trash, setTrash } = useContext(NoteContext);

    const removeTodolist = useCallback(
      (id: string) => {
        setTrash(trash.filter(tl => tl.id !== id));
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
                  <Paper
                    style={{ padding: '20px', maxWidth: '250px', borderRadius: '8px' }}
                    elevation={3}
                  >
                    <DeleteNotes todolist={tl} removeTodolist={removeTodolist} />
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
