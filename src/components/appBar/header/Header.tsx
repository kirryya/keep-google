import React, {ChangeEvent, FC, memo, useCallback, useContext} from "react";
import {NoteContext} from "../../../context";
import {IconButton, Toolbar,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {HeaderType} from "../../../types";
import {AppBar, Search, SearchIconWrapper, StyledInputBase, StyledTypography} from "./HeaderStyle"
import {ReturnComponentType} from "../../../types/ReturnComponentType";

export const Header: FC<HeaderType> = memo(({open, handleDrawer}): ReturnComponentType => {

    const {search, setSearch} = useContext(NoteContext)

    const onChangeSearchHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }, [setSearch])

    return (
        <AppBar open={open} color='inherit'>
            <Toolbar>
                <IconButton onClick={handleDrawer} edge='start' sx={{marginRight: '36px'}}>
                    <MenuIcon />
                </IconButton>
                <StyledTypography>Keep</StyledTypography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Поиск" onChange={onChangeSearchHandle} value={search}/>
                </Search>
            </Toolbar>
        </AppBar>
    )
});