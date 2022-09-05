import React, {ChangeEvent, FC, memo, useState} from 'react';
import {TextField, Typography} from "@mui/material";
import {EditableSpanType} from "./types";

export const EditableSpan: FC<EditableSpanType> = memo(({value, onChange}) => {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange && onChange(title);
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} multiline
                         maxRows={Infinity}/>
            : <Typography onDoubleClick={activateEditMode}
                          style={{maxWidth: "250px", whiteSpace: "pre-wrap", wordBreak: "break-all"}}
            >
                {value}
            </Typography>
    )
});