import React, {useContext} from "react";
import {NoteContext} from "../../../context";
import {v1} from "uuid";
import {Container, Grid} from "@mui/material";
import {AddItemForm} from "../../common/AddItemForm";
import {WorkSpaceNotes} from "./WorkSpaceNotes";
import {EmptyNotes} from "../../common/EmptyNotes";
import {createData} from "../../../utils/createData";

export const Notes = () => {

    const {notes, setNotes, search} = useContext(NoteContext)

    const searched = createData(notes, search)

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