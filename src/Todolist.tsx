import {TextField} from '@mui/material';
import React, {ChangeEvent, useContext, useState} from 'react';
import {EditableSpan} from './components/EditableSpan';
import {ButtonsBar} from "./ButtonsBar";
import {NoteContext, NoteType} from "./context/Context";

type PropsType = {
    todolist: NoteType
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    changeTodolistNote: (id: string, newNote: string) => void
    addTodolistTitle: (id: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const {notes, setArchives, setNotes, setTrash} = useContext(NoteContext)

    const [newTitle, setNewTitle] = useState<boolean>(false)

    const addTitle = () => {
        setNewTitle(true)
    }
    const closeAddTitle = () => {
        setNewTitle(false)
    }

    const removeTodolist = () => {
        props.removeTodolist(props.todolist.id);
    }

    const addTodolistTitle = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTodolistTitle(props.todolist.id, e.currentTarget.value);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.todolist.id, title);
    }

    const changeTodolistNote = (note: string) => {
        props.changeTodolistNote(props.todolist.id, note);
    }

    const onClickArchiveHandler = () => {
        setNotes(notes.filter(tl => tl.id !== props.todolist.id))
        setArchives(prevArr => [props.todolist, ...prevArr])
    }

    const onClickTrashHandler = () => {
        setNotes(notes.filter(tl => tl.id !== props.todolist.id))
        setTrash(prevArr => [props.todolist, ...prevArr])
    }

    return (
        <div>
            <div style={{minWidth: "240px", maxWidth: "240px"}}>
                {newTitle &&
                    <TextField value={props.todolist.title} onChange={addTodolistTitle} onBlur={closeAddTitle}/>}
                <h2>
                    {!newTitle && <EditableSpan value={props.todolist.title} onChange={changeTodolistTitle}/>}
                </h2>
                <div>
                    <EditableSpan value={props.todolist.note} onChange={changeTodolistNote}/>
                </div>
            </div>
            <ButtonsBar removeTodolist={removeTodolist} addTitle={addTitle} title={props.todolist.title}
                        moveToArchive={onClickArchiveHandler} moveToTrash={onClickTrashHandler}/>
        </div>
    )
}





