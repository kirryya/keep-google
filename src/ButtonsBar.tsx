import {Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import {Delete} from "@mui/icons-material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

type ButtonsBarType = {
    removeTodolist: () => void
    addTitle: () => void
    title: string
}

export const ButtonsBar = (props: ButtonsBarType) => {

    const onClickDeleteHandler = () => {

    }

    const onClickArchiveHandler = () => {

    }

    return <div>
        <div style={{marginTop: "25px", marginLeft: "-10px"}}>
            <Tooltip title="Переместить в архив">
                <IconButton onClick={onClickArchiveHandler}>
                    <ArchiveOutlinedIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            <Tooltip title="Переместить в корзину">
                <IconButton onClick={onClickDeleteHandler}>
                    <Delete fontSize="small" />
                </IconButton>
            </Tooltip>
            <Tooltip title="Удалить">
                <IconButton onClick={props.removeTodolist}>
                    <HighlightOffOutlinedIcon fontSize="small"/>
                </IconButton>
            </Tooltip>
            {!props.title &&
                <Tooltip title="Добавить заголовок">
                    <IconButton onClick={props.addTitle}>
                        <AddIcon fontSize={"medium"}/>
                    </IconButton>
                </Tooltip>
            }
        </div>
    </div>
};
