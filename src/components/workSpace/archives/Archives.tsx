import React, {useContext} from "react";
import {NoteContext} from "../../../context";
import {Container} from "@mui/material";
import {WorkSpaceArchives} from "./WorkSpaceArchives";
import {EmptyNotes} from "../../common/EmptyNotes";
import {createData} from "../../../utils/createData";

export const Archives = () => {

    const {archives, search} = useContext(NoteContext)

    const searched = createData(archives, search)

    return <Container fixed style={{paddingTop: "274px"}}>
        {
            searched.length > 0
                ? <WorkSpaceArchives searched={searched}/>
                : <EmptyNotes/>
        }
    </Container>
}