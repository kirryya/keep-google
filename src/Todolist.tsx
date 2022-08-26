import {TextField} from '@mui/material';
import React, {ChangeEvent, useState} from 'react';
import {EditableSpan} from './components/EditableSpan';
import {ButtonsBar} from "./ButtonsBar";

type PropsType = {
    id: string
    title: string
    note: string
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    changeTodolistNote: (id: string, newNote: string) => void
    addTodolistTitle: (id: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const [newTitle, setNewTitle] = useState<boolean>(false)

    const addTitle = () => {
        setNewTitle(true)
    }
    const closeAddTitle = () => {
        setNewTitle(false)
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }

    const addTodolistTitle = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTodolistTitle(props.id, e.currentTarget.value);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const changeTodolistNote = (note: string) => {
        props.changeTodolistNote(props.id, note);
    }

    return (
        <div>
            <div style={{minWidth: "240px", maxHeight:"450px", width:"100%"}}>
                {newTitle && <TextField value={props.title} onChange={addTodolistTitle} onBlur={closeAddTitle}/>}
                <h3>
                    {!newTitle && <EditableSpan value={props.title} onChange={changeTodolistTitle}/>}
                </h3>
                <div>
                    <EditableSpan value={props.note} onChange={changeTodolistNote}/>
                </div>
            </div>
            <ButtonsBar removeTodolist={removeTodolist} addTitle={addTitle} title={props.title}/>
        </div>
    )
}





