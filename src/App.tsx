import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {AppDrawer} from "./components/AppDrawer";
import {AddItemForm} from "./components/AddItemForm";
import {Container, Grid, Paper, Typography} from "@mui/material";
import {Todolist} from "./Todolist";
import {v1} from 'uuid';
import {Provider} from "./context/Provider";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

type NoteType = {
    id: string
    title: string
    note: string
}

function App() {

    const [notes, setNotes] = useState<Array<NoteType>>([])
    const [search, setSearch] = useState<string>('')

    const searched = notes.filter(tl => tl.title.toLowerCase().includes(search.toLowerCase()))

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.currentTarget.value
        setSearch(searchValue)
    }

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

    return (
        <Provider>
            <AppDrawer search={search} onChangeSearchHandler={onChangeSearchHandler}/>
            <Container fixed>
                <Grid container style={{padding: "100px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                {searched.length > 0 ?
                    <Grid container spacing={3}>
                        {
                            searched.map(tl => {
                                return <Grid item key={tl.id}>
                                    <Paper style={{padding: "20px", width: "240px", borderRadius: "8px"}} elevation={3} >
                                        <Todolist
                                            key={tl.id}
                                            id={tl.id}
                                            title={tl.title}
                                            note={tl.note}
                                            removeTodolist={removeTodolist}
                                            changeTodolistTitle={changeTodolistTitle}
                                            changeTodolistNote={changeTodolistNote}
                                        />
                                    </Paper>
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
        </Provider>
    );
}

export default App;
