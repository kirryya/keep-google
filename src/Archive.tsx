import React, {useContext} from 'react';
import {NoteContext, NoteType} from "./context/Context";
import {Tooltip, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

type PropsType = {
    todolist: NoteType
    removeTodolist: (id: string) => void
}

export function Archive(props: PropsType) {

    const {archives, setArchives, setNotes, setTrash} = useContext(NoteContext)

    const removeTodolist = () => {
        props.removeTodolist(props.todolist.id);
    }

    const onClickArchiveHandler = () => {
        setArchives(archives.filter(tl => tl.id !== props.todolist.id))
        setNotes(prevArr => [props.todolist, ...prevArr])
    }

    const onClickTrashHandler = () => {
        setArchives(archives.filter(tl => tl.id !== props.todolist.id))
        setTrash(prevArr => [props.todolist, ...prevArr])
    }

    return (
        <div>
            <div style={{minWidth: "240px", maxWidth: "240px"}}>
                <h2>
                    <Typography> {props.todolist.title} </Typography>
                </h2>
                <div>
                    <Typography> {props.todolist.note} </Typography>
                </div>
            </div>
            <div style={{marginTop: "25px", marginLeft: "-10px"}}>
                <Tooltip title="Переместить в заметки">
                    <IconButton onClick={onClickArchiveHandler}>
                        <LightbulbOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Переместить в корзину">
                    <IconButton onClick={onClickTrashHandler}>
                        <Delete fontSize="small"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                    <IconButton onClick={removeTodolist}>
                        <HighlightOffOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}





