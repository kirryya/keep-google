import React, {FC, memo, useContext} from 'react';
import {NoteContext} from "../../../context";
import {Tooltip, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import {ArchiveType} from "./types";

export const Archive: FC<ArchiveType> = memo(({todolist, removeTodolist}) => {

    const {archives, setArchives, setNotes, setTrash} = useContext(NoteContext)

    const removeTodolistHandle = () => {
        removeTodolist(todolist.id);
    }

    const onClickNoteHandle = () => {
        setArchives(archives.filter(tl => tl.id !== todolist.id))
        setNotes(prevArr => [todolist, ...prevArr])
    }

    const onClickTrashHandle = () => {
        setArchives(archives.filter(tl => tl.id !== todolist.id))
        setTrash(prevArr => [todolist, ...prevArr])
    }

    return (
        <div>
            <div style={{minWidth: "240px"}}>
                <h2>
                    <Typography> {todolist.title} </Typography>
                </h2>
                <div>
                    <Typography> {todolist.note} </Typography>
                </div>
            </div>
            <div style={{marginTop: "25px", marginLeft: "-10px"}}>
                <Tooltip title="Переместить в заметки">
                    <IconButton onClick={onClickNoteHandle}>
                        <LightbulbOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Переместить в корзину">
                    <IconButton onClick={onClickTrashHandle}>
                        <Delete fontSize="small"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                    <IconButton onClick={removeTodolistHandle}>
                        <HighlightOffOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
});