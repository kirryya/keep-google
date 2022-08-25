import * as React from 'react';
import {CSSObject, styled, Theme, alpha } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Box,
    Drawer as MuiDrawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    InputBase
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SearchIcon from '@mui/icons-material/Search';

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

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {})<AppBarProps>(({theme}) => ({
    zIndex: theme.zIndex.drawer + 1
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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.50),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.30),
    },
    marginLeft: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        backgroundColor: alpha(theme.palette.common.white, 0.50),
        width: '100%',
        borderRadius:"6px",
        height: "30px",
        [theme.breakpoints.up('sm')]: {
            width: '70ch',
            '&:focus': {
                width: '70ch',
                borderRadius:"6px",
                boxShadow: '1px 3px 1em 0 #dadce0',
                backgroundColor: '#ffffff',
            },
        },
    },
}));


export function AppDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    const sideBarIcons = [
        {id: 1, name: "Notes", icon: <LightbulbOutlinedIcon/>},
        {id: 2, name: "Reminders", icon: <NotificationsNoneOutlinedIcon/>},
        {id: 3, name: "Edit labels", icon: <CreateOutlinedIcon/>},
        {id: 4, name: "Archives", icon: <ArchiveOutlinedIcon/>},
        {id: 5, name: "Trash", icon: <DeleteForeverOutlinedIcon/>},
    ]

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar open={open} color='inherit' style={{boxShadow: 'inset 0 -1px 0 0 #dadce0', height: '65px'}}>
                <Toolbar>
                    <IconButton onClick={handleDrawer} edge="start" sx={{marginRight: '36px'}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography style={{marginLeft: '25px', fontSize: '22px'}}>Keep</Typography>
                    <Search style={{border: '1px #dadce0', marginLeft: '100px', backgroundColor: '#e1e0e0'}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Поиск"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader> </DrawerHeader>
                <List>
                    {sideBarIcons.map((icon) => (
                        <ListItem key={icon.id} disablePadding sx={{display: 'block'}}>
                            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}>
                                <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                    {icon.icon}
                                </ListItemIcon>
                                <ListItemText primary={icon.name} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
