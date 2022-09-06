import {NoteContext} from "../../../context";
import React, {memo, ReactElement, useCallback, useContext} from "react";
import {Box, Grid, Paper} from "@mui/material";
import {DeleteNotes} from "./DeleteNotes";
import {WorkSpacePropsType} from "../../../types";

export const WorkSpaceTrash: React.FC<WorkSpacePropsType> = memo(({searched}): ReactElement => {

    const {trash, setTrash} = useContext(NoteContext)

    const removeTodolist = useCallback((id: string) => {
        setTrash(trash.filter(tl => tl.id !== id));
    }, [trash, setTrash])

    return (
        <Grid container spacing={3}>
            {
                searched?.map(tl => {
                    return <Grid item key={tl.id}>
                        <Box sx={{display: "flex", width: "100%"}}>
                            <Box sx={{p: 3, width: "100%"}}>
                                <Paper style={{padding: "20px", maxWidth: "250px", borderRadius: "8px"}}
                                       elevation={3}>
                                    <DeleteNotes
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
    );
});