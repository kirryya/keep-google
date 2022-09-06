import React, {useContext} from "react";
import {NoteContext} from "../../../context";
import {Container} from "@mui/material";
import {WorkSpaceArchives} from "./WorkSpaceArchives";
import {createData} from "../../../utils/createData";
import {WorkSpace} from "../../../hoc/WorkSpace";

export const Archives = () => {

    const {archives, search} = useContext(NoteContext)

    const searched = createData(archives, search)

    return (
        <Container fixed style={{paddingTop: "274px"}}>
            <WorkSpace searched={searched} Component={WorkSpaceArchives}/>
        </Container>
    )
};