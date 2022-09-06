import React, {memo, useContext} from "react";
import {NoteContext} from "../../../context";
import {Container} from "@mui/material";
import {WorkSpaceTrash} from "./WorkSpaceTrash";
import {createData} from "../../../utils/createData";
import {WorkSpace} from "../../../hoc/WorkSpace";
import {ReturnComponentType} from "../../../types/ReturnComponentType";

export const Trash = memo((): ReturnComponentType => {

    const {trash, search} = useContext(NoteContext)

    const searched = createData(trash, search)

    return (
        <Container fixed style={{paddingTop: "274px"}}>
            <WorkSpace searched={searched} Component={WorkSpaceTrash}/>
        </Container>
    )
})