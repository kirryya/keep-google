import React, {FC, memo, ReactElement, useContext} from 'react';
import {NoteContext} from "../../../context";
import {Tooltip, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import {DeleteNotesType} from "./types";

export const DeleteNotes: FC<DeleteNotesType> = memo(({todolist, removeTodolist }): ReactElement => {

    const {trash, setArchives, setNotes, setTrash} = useContext(NoteContext)

    const removeTodolistHandle = () => {
        removeTodolist(todolist.id);
    }

    const onClickNoteHandle = () => {
        setTrash(trash.filter(tl => tl.id !== todolist.id))
        setNotes(prevArr => [todolist, ...prevArr])
    }

    const onClickArchiveHandle = () => {
        setTrash(trash.filter(tl => tl.id !== todolist.id))
        setArchives(prevArr => [todolist, ...prevArr])
    }

    return (
        <div>
            <div style={{minWidth: "240px"}}>
                <h2>
                    <Typography  style={{maxWidth: "250px", whiteSpace: "pre-wrap", wordBreak: "break-all"}}> {todolist.title} </Typography>
                </h2>
                <div>
                    <Typography  style={{maxWidth: "250px", whiteSpace: "pre-wrap", wordBreak: "break-all"}}> {todolist.note} </Typography>
                </div>
            </div>
            <div style={{marginTop: "25px", marginLeft: "-10px"}}>
                <Tooltip title="Переместить в заметки">
                    <IconButton onClick={onClickNoteHandle}>
                        <LightbulbOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Переместить в архив">
                    <IconButton onClick={onClickArchiveHandle}>
                        <ArchiveOutlinedIcon fontSize="small"/>
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
})





