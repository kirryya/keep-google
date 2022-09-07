import React, { FC, memo } from 'react';

import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Delete from '@mui/icons-material/Delete';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { ReturnComponentType } from '../../../types';

import { Drawer, DrawerHeader } from './style/SidebarStyle';
import { SideBarIconsType, SideBarType } from './types';

const marginRight = 3;

export const SideBar: FC<SideBarType> = memo(
  ({ open }: SideBarType): ReturnComponentType => {
    const sideBarLinks: SideBarIconsType = [
      { id: 1, name: 'Заметки', icon: <LightbulbOutlinedIcon />, route: '/' },
      { id: 2, name: 'Архив', icon: <ArchiveOutlinedIcon />, route: '/archive' },
      { id: 3, name: 'Корзина', icon: <Delete />, route: '/trash' },
    ];

    return (
      <Drawer variant="permanent" open={open}>
        <DrawerHeader> </DrawerHeader>
        <List>
          {sideBarLinks.map(({ id, name, icon, route }) => (
            <ListItem key={id} disablePadding sx={{ display: 'block' }}>
              <Tooltip disableHoverListener={open} title={`${name}`} placement="right">
                <Link
                  to={`${route}`}
                  style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? marginRight : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </Link>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  },
);
