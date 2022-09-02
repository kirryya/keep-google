import React, {ChangeEvent, useContext} from "react";
import {NoteContext} from "../../context";
import {IconButton, Toolbar,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {HeaderType} from "../../types";
import {AppBar, Search, SearchIconWrapper, StyledInputBase, StyledTypography} from "./HeaderStyle"

export const Header: React.FC<HeaderType> = React.memo(({open, handleDrawer}) => {

    const {search, setSearch} = useContext(NoteContext)

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return <>
        <AppBar open={open} color='inherit'>
            <Toolbar>
                <IconButton onClick={handleDrawer} edge="start" sx={{marginRight: '36px'}}>
                    <MenuIcon/>
                </IconButton>
                <StyledTypography>Keep</StyledTypography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Поиск"
                        onChange={onChangeSearchHandler}
                        value={search}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    </>
});