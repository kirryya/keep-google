import React, {memo, useCallback, useContext} from "react";
import {NoteContext} from "../../../context";
import {v1} from "uuid";
import {Container, Grid} from "@mui/material";
import {AddItemForm} from "../../common/AddItemForm";
import {WorkSpaceNotes} from "./WorkSpaceNotes";
import {createData} from "../../../utils/createData";
import {WorkSpace} from "../../../hoc/WorkSpace";

export const Notes = memo(() => {

    const {notes, setNotes, search} = useContext(NoteContext)

    const searched = createData(notes, search)

    const addTodolist = useCallback((title: string, note: string) => {
        setNotes([{id: v1(), title, note}, ...notes]);
    }, [notes, setNotes])

    return (
        <Container fixed>
            <Grid container style={{padding: "100px"}}>
                <AddItemForm addItem={addTodolist}/>
            </Grid>
            <WorkSpace searched={searched} Component={WorkSpaceNotes}/>
        </Container>
    )
});