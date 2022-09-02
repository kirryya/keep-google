import React, {FC, memo} from 'react';
import {CSSObject, styled, Theme} from '@mui/material/styles';
import {Drawer as MuiDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip} from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Delete from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";

const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

type SideBarType = {
    open: boolean
}

type LinksType = {
    id: number
    name: string
    icon: any
    route: string
}

type SideBarIconsType = LinksType[]

export const SideBar: FC<SideBarType> = memo(({open}) => {

    const sideBarLinks: SideBarIconsType = [
        {id: 1, name: "Заметки", icon: <LightbulbOutlinedIcon/>, route: "/"},
        {id: 2, name: "Архив", icon: <ArchiveOutlinedIcon/>, route: "/archive"},
        {id: 3, name: "Корзина", icon: <Delete/>, route: "/trash"},
    ]

    return <>
        <Drawer variant="permanent" open={open}>
            <DrawerHeader> </DrawerHeader>
            <List>
                {sideBarLinks.map(({id, name, icon, route}) => (
                    <ListItem key={id} disablePadding sx={{display: 'block'}}>
                        <Tooltip disableHoverListener={open} title={`${name}`} placement="right">
                            <Link to={`${route}`}
                                  style={{textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                                <ListItemButton
                                    sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}>
                                    <ListItemIcon
                                        sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={name} sx={{opacity: open ? 1 : 0}}/>
                                </ListItemButton>
                            </Link>
                        </Tooltip>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </>
});