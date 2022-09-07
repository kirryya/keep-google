import React, { FC, useState } from 'react';

import { Box } from '@mui/material';

import { ReturnComponentType } from '../../types';

import { Header, SideBar } from '.';

export const AppDrawer: FC = (): ReturnComponentType => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawer = (): void => {
    setOpen(prevState => !prevState);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawer={handleDrawer} />
      <SideBar open={open} />
    </Box>
  );
};
