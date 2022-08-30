import * as React from 'react';
import {ChangeEvent, useContext, useState} from 'react';
import {AppDrawer} from "./components/AppDrawer";
import {AddItemForm} from "./components/AddItemForm";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import {Todolist} from "./Todolist";
import {v1} from 'uuid';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {NoteContext, NotesProvider} from "./context/Context";


export function App() {

    const [search, setSearch] = useState<string>("")

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return <NotesProvider>
        <AppDrawer onChangeSearchHandler={onChangeSearchHandler} search={search}/>
        <Todolists search={search}/>
    </NotesProvider>
}

type TodolistsPropsType = {
    search: string
}

export const Todolists = (props: TodolistsPropsType) => {

    const {notes, setNotes} = useContext(NoteContext)

    const searched = notes.filter(tl => tl.title.toLowerCase().includes(props.search.toLowerCase()) || tl.note.toLowerCase().includes(props.search.toLowerCase()))

    function removeTodolist(id: string) {
        setNotes(notes.filter(tl => tl.id !== id));
    }

    function changeTodolistTitle(id: string, title: string) {
        setNotes(notes.map(tl => tl.id === id ? {...tl, title: title} : tl));
    }

    function changeTodolistNote(id: string, note: string) {
        setNotes(notes.map(tl => tl.id === id ? {...tl, note: note} : tl));
    }

    function addTodolist(title: string, note: string) {
        setNotes([{id: v1(), title, note}, ...notes]);
    }

    return <>
        <Container fixed>
            <Grid container style={{padding: "100px"}}>
                <AddItemForm addItem={addTodolist}/>
            </Grid>
            {searched.length > 0 ?
                <Grid container spacing={3}>
                    {
                        searched.map(tl => {
                            return <Grid item key={tl.id}>
                                <Box sx={{display: "flex", width: "100%"}}>
                                    <Box sx={{p: 3, width: "100%"}}>
                                        <Paper style={{padding: "20px", maxWidth: "250px", borderRadius: "8px"}}
                                               elevation={3}>
                                            <Todolist
                                                key={tl.id}
                                                id={tl.id}
                                                title={tl.title}
                                                note={tl.note}
                                                removeTodolist={removeTodolist}
                                                changeTodolistTitle={changeTodolistTitle}
                                                changeTodolistNote={changeTodolistNote}
                                                addTodolistTitle={changeTodolistTitle}
                                            />
                                        </Paper>
                                    </Box>
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
                : <Grid style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <LightbulbOutlinedIcon style={{fontSize: "120px", color: "#dadce0"}}/>
                    <Typography style={{fontSize: "22px", color: "#96969a"}}>Здесь будут ваши заметки</Typography>
                </Grid>
            }
        </Container>
    </>
};