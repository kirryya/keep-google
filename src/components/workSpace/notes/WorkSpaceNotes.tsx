import {NoteContext} from "../../../context";
import React, {useContext} from "react";
import {Box, Grid, Paper} from "@mui/material";
import {Note} from "./Note";
import {WorkSpacePropsType} from "../../../types";

export const WorkSpaceNotes: React.FC<WorkSpacePropsType> = React.memo(({searched}) => {

    const {notes, setNotes} = useContext(NoteContext)

    function removeTodolist(id: string) {
        setNotes(notes.filter(tl => tl.id !== id));
    }

    function changeTodolistTitle(id: string, title: string) {
        setNotes(notes.map(tl => tl.id === id ? {...tl, title} : tl));
    }

    function changeTodolistNote(id: string, note: string) {
        setNotes(notes.map(tl => tl.id === id ? {...tl, note} : tl));
    }

    return (
        <div>
            <Grid container spacing={3}>
                {
                    searched?.map(({id, title, note }) => {
                        return <Grid item key={id}>
                            <Box sx={{display: "flex", width: "100%"}}>
                                <Box sx={{p: 3, width: "100%"}}>
                                    <Paper style={{padding: "20px", maxWidth: "250px", borderRadius: "8px"}}
                                           elevation={3}>
                                        <Note
                                            todolist={{id, title, note}}
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
});