import React, {FC, memo, useContext} from "react";
import {NoteContext} from "../../../context";
import {Box, Grid, Paper} from "@mui/material";
import {WorkSpacePropsType} from "../../../types";
import {Archive} from "./Archive";

export const WorkSpaceArchives: FC<WorkSpacePropsType> = memo(({searched}) => {

    const {archives, setArchives} = useContext(NoteContext)

    function removeTodolist(id: string) {
        setArchives(archives.filter(tl => tl.id !== id));
    }

    return (
        <Grid container spacing={3}>
            {
                searched?.map(({id, title, note}) => {
                    return <Grid item key={id}>
                        <Box sx={{display: "flex", width: "100%"}}>
                            <Box sx={{p: 3, width: "100%"}}>
                                <Paper style={{padding: "20px", maxWidth: "250px", borderRadius: "8px"}}
                                       elevation={3}>
                                    <Archive
                                        todolist={{id, title, note}}
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