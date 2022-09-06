import {TextField} from '@mui/material';
import React, {ChangeEvent, FC, useCallback, useContext, useState} from 'react';
import {EditableSpan} from '../../common/EditableSpan';
import {ButtonsBar} from "./ButtonsBar";
import {NoteContext} from "../../../context";
import {TodolistPropsType} from "./types";

export const Note: FC<TodolistPropsType> = React.memo(({
                                                           todolist,
                                                           removeTodolist,
                                                           changeTodolistTitle,
                                                           addTodolistTitle,
                                                           changeTodolistNote
                                                       }) => {

    const {notes, setArchives, setNotes, setTrash} = useContext(NoteContext)

    const [newTitle, setNewTitle] = useState<boolean>(false)

    const addTitle = () => {
        setNewTitle(true)
    }
    const closeAddTitle = () => {
        setNewTitle(false)
    }

    const removeTodolistHandle = useCallback(() => {
        removeTodolist(todolist.id);
    }, [removeTodolist, todolist.id])

    const addTodolistTitleHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        addTodolistTitle(todolist.id, e.currentTarget.value);
    }, [addTodolistTitle, todolist.id])

    const changeTodolistTitleHandle = useCallback((title: string) => {
        changeTodolistTitle(todolist.id, title);
    }, [changeTodolistTitle, todolist.id])


    const changeTodolistNoteHandle = useCallback((note: string) => {
        changeTodolistNote(todolist.id, note);
    }, [changeTodolistNote, todolist.id])


    const onClickArchiveHandle = useCallback(() => {
        setNotes(notes.filter(tl => tl.id !== todolist.id))
        setArchives(prevArr => [todolist, ...prevArr])
    }, [setNotes, setArchives, notes, todolist])


    const onClickTrashHandle = useCallback(() => {
        setNotes(notes.filter(tl => tl.id !== todolist.id))
        setTrash(prevArr => [todolist, ...prevArr])
    }, [setNotes, setTrash, notes, todolist])

    return (
        <div>
            <div style={{minWidth: "240px", maxWidth: "240px"}}>
                {newTitle &&
                    <TextField value={todolist.title} onChange={addTodolistTitleHandle} onBlur={closeAddTitle}/>}
                <h2>
                    {!newTitle && <EditableSpan value={todolist.title} onChange={changeTodolistTitleHandle}/>}
                </h2>
                <div>
                    <EditableSpan value={todolist.note} onChange={changeTodolistNoteHandle}/>
                </div>
            </div>
            <ButtonsBar removeTodolist={removeTodolistHandle} addTitle={addTitle} title={todolist.title}
                        moveToArchive={onClickArchiveHandle} moveToTrash={onClickTrashHandle}/>
        </div>
    )
})





