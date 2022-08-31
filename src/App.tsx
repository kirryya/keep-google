import * as React from 'react';
import {useContext} from 'react';
import {AppDrawer} from "./components/AppDrawer";
import {AddItemForm} from "./components/AddItemForm";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import {Todolist} from "./Todolist";
import {v1} from 'uuid';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {NoteContext, NotesProvider, NoteType} from "./context/Context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Archive} from "./Archive";

export function App() {

    return (
        <BrowserRouter>
            <NotesProvider>
                <AppDrawer/>
                <Routes>
                    <Route path="/" element={<Notes/>}/>
                    <Route path="/archive" element={<Archives/>}/>
                    <Route path="/trash" element={<Trash/>}/>
                </Routes>
            </NotesProvider>
        </BrowserRouter>
    )
}

export const Notes = () => {

    const {notes, setNotes, search} = useContext(NoteContext)

    const searched = notes.filter(tl => tl.title.toLowerCase().includes(search.toLowerCase()) || tl.note.toLowerCase().includes(search.toLowerCase()))

    function addTodolist(title: string, note: string) {
        setNotes([{id: v1(), title, note}, ...notes]);
    }

    return <>
        <Container fixed>
            <Grid container style={{padding: "100px"}}>
                <AddItemForm addItem={addTodolist}/>
            </Grid>
            {
                searched.length > 0
                    ? <WorkSpaceNotes searched={searched}/>
                    : <EmptyNotes/>
            }
        </Container>
    </>
};

type WorkSpaceNotesPropsType = {
    searched: NoteType[] | null
}

export const WorkSpaceNotes = (props: WorkSpaceNotesPropsType) => {

    const {notes, setNotes} = useContext(NoteContext)

    function removeTodolist(id: string) {
        setNotes(notes.filter(tl => tl.id !== id));
    }

    function changeTodolistTitle(id: string, title: string) {
        setNotes(notes.map(tl => tl.id === id ? {...tl, title: title} : tl));
    }

    function changeTodolistNote(id: string, note: string) {
        setNotes(notes.map(tl => tl.id === id ? {...tl, note: note} : tl));
    }

    return (
        <div>
            <Grid container spacing={3}>
                {
                    props.searched?.map(tl => {
                        return <Grid item key={tl.id}>
                            <Box sx={{display: "flex", width: "100%"}}>
                                <Box sx={{p: 3, width: "100%"}}>
                                    <Paper style={{padding: "20px", maxWidth: "250px", borderRadius: "8px"}}
                                           elevation={3}>
                                        <Todolist
                                            todolist={tl}
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
        </div>
    );
};

export const EmptyNotes = () => {
    return (
        <Grid style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <LightbulbOutlinedIcon style={{fontSize: "120px", color: "#dadce0"}}/>
            <Typography style={{fontSize: "22px", color: "#96969a"}}>Здесь будут ваши заметки</Typography>
        </Grid>
    );
};

export const Archives = () => {

    const {archives, search } = useContext(NoteContext)

    const searched = archives.filter(tl => tl.title.toLowerCase().includes(search.toLowerCase()) || tl.note.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <Container fixed style={{padding: "274px"}}>
                {
                    searched.length > 0
                        ? <WorkSpaceArchives searched={searched}/>
                        : <EmptyNotes/>
                }
            </Container>
        </>
    )
}

export const Trash = () => {

    const {trash, search} = useContext(NoteContext)

    const searched = trash.filter(tl => tl.title.toLowerCase().includes(search.toLowerCase()) || tl.note.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <Container fixed style={{padding: "274px"}}>
                {
                    searched.length > 0
                        ? <WorkSpaceNotes searched={searched}/>
                        : <EmptyNotes/>
                }
            </Container>
        </>
    )
}

type WorkSpaceArchivesPropsType = {
    searched: NoteType[] | null
}

export const WorkSpaceArchives = (props: WorkSpaceArchivesPropsType) => {

    const {archives, setArchives} = useContext(NoteContext)

    function removeTodolist(id: string) {
        setArchives(archives.filter(tl => tl.id !== id));
    }

    return (
        <div>
            <Grid container spacing={3}>
                {
                    props.searched?.map(tl => {
                        return <Grid item key={tl.id}>
                            <Box sx={{display: "flex", width: "100%"}}>
                                <Box sx={{p: 3, width: "100%"}}>
                                    <Paper style={{padding: "20px", maxWidth: "250px", borderRadius: "8px"}}
                                           elevation={3}>
                                        <Archive
                                            todolist={tl}
                                            removeTodolist={removeTodolist}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                        </Grid>
                    })
                }
            </Grid>
        </div>
    );
};
