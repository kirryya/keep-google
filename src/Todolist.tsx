import {Delete} from '@mui/icons-material';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {EditableSpan} from './components/EditableSpan';

type PropsType = {
    id: string
    title: string
    note: string
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    changeTodolistNote: (id: string, newNote: string) => void
}

export function Todolist(props: PropsType) {

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }

    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const changeTodolistNote = (note: string) => {
        props.changeTodolistNote(props.id, note);
    }

    return <div>
        <div>
            <h3>
                <EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            </h3>
            <div>
                <EditableSpan value={props.note} onChange={changeTodolistNote}/>
            </div>
            <div style={{marginTop: "20px", marginLeft: "-10px"}}>
                <IconButton >
                    <ArchiveOutlinedIcon fontSize="small"/>
                </IconButton>
                <IconButton onClick={removeTodolist}>
                    <Delete fontSize="small"/>
                </IconButton>
            </div>
        </div>
    </div>
}


