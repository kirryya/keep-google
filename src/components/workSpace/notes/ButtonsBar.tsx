import {Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import {Delete} from "@mui/icons-material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import AddIcon from "@mui/icons-material/Add";
import React, {FC} from "react";
import {ButtonsBarType} from "./types";
import {ReturnComponentType} from "../../../types/ReturnComponentType";

export const ButtonsBar: FC<ButtonsBarType> = ({
                                                   moveToArchive,
                                                   moveToTrash,
                                                   title,
                                                   addTitle,
                                                   removeTodolist
                                               }): ReturnComponentType => {

    return (
        <div style={{marginTop: '25px', marginLeft: '-10px'}}>
            <Tooltip title="Переместить в архив">
                <IconButton onClick={moveToArchive}>
                    <ArchiveOutlinedIcon fontSize="small"/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Переместить в корзину">
                <IconButton onClick={moveToTrash}>
                    <Delete fontSize="small"/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Удалить">
                <IconButton onClick={removeTodolist}>
                    <HighlightOffOutlinedIcon fontSize="small"/>
                </IconButton>
            </Tooltip>
            {!title && (
                <Tooltip title="Добавить заголовок">
                    <IconButton onClick={addTitle}>
                        <AddIcon fontSize={"medium"}/>
                    </IconButton>
                </Tooltip>
            )}
        </div>
    )
};
