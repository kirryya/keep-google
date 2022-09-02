import React, {ChangeEvent, useContext} from "react";
import {NoteContext} from "../../context";
import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import {HeaderType} from "../../types";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {})<AppBarProps>(({theme}) => ({
    zIndex: theme.zIndex.drawer + 1
}));

const Search = styled('div')(({theme}) => ({
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

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        backgroundColor: alpha(theme.palette.common.white, 0.50),
        width: '100%',
        borderRadius: "6px",
        height: "30px",
        [theme.breakpoints.up('sm')]: {
            width: '70ch',
            '&:focus': {
                width: '70ch',
                borderRadius: "6px",
                boxShadow: '1px 3px 1em 0 #dadce0',
                backgroundColor: '#ffffff',
            },
        },
    },
}));

export const Header: React.FC<HeaderType> = React.memo(({open, handleDrawer}) => {

    const {search, setSearch} = useContext(NoteContext)

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return <>
        <AppBar open={open} color='inherit' style={{boxShadow: 'inset 0 -1px 0 0 #dadce0', height: '65px'}}>
            <Toolbar>
                <IconButton onClick={handleDrawer} edge="start" sx={{marginRight: '36px'}}>
                    <MenuIcon/>
                </IconButton>
                <Typography style={{marginLeft: '25px', fontSize: '22px'}}>Keep</Typography>
                <Search style={{border: '1px #dadce0', marginLeft: '100px', backgroundColor: '#e1e0e0'}}>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Поиск"
                        inputProps={{'aria-label': 'search'}}
                        onChange={onChangeSearchHandler}
                        value={search}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    </>
});