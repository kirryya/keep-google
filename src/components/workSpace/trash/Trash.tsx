import React, {useContext} from "react";
import {NoteContext} from "../../../context";
import {Container} from "@mui/material";
import {WorkSpaceTrash} from "./WorkSpaceTrash";
import {createData} from "../../../utils/createData";
import {WorkSpace} from "../../../hoc/WorkSpace";

export const Trash = () => {

    const {trash, search} = useContext(NoteContext)

    const searched = createData(trash, search)

    return (
        <Container fixed style={{paddingTop: "274px"}}>
            <WorkSpace searched={searched} Component={WorkSpaceTrash}/>
        </Container>
    )
}