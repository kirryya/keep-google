import React, {useContext} from "react";
import {NoteContext} from "../../../context";
import {Container} from "@mui/material";
import {WorkSpaceTrash} from "./WorkSpaceTrash";
import {EmptyNotes} from "../../common/EmptyNotes";
import {createData} from "../../../utils/createData";

export const Trash = () => {

    const {trash, search} = useContext(NoteContext)

    const searched = createData(trash, search)

    return (
        <>
            <Container fixed style={{padding: "274px"}}>
                {
                    searched.length > 0
                        ? <WorkSpaceTrash searched={searched}/>
                        : <EmptyNotes/>
                }
            </Container>
        </>
    )
}