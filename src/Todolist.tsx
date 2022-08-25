import {Delete} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {FilterValuesType} from './App';
import {EditableSpan} from './components/EditableSpan';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    note: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    changeTodolistNote: (id: string, newNote: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
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
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </div>
    </div>
}


