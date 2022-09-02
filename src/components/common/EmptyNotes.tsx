import React from "react";
import {Grid, Typography} from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

export const EmptyNotes = () => {
    return (
        <Grid style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <LightbulbOutlinedIcon style={{fontSize: "120px", color: "#dadce0"}}/>
            <Typography style={{fontSize: "22px", color: "#96969a"}}>Здесь будут ваши заметки</Typography>
        </Grid>
    );
};