import React, {ChangeEvent, useState} from 'react';
import {ClickAwayListener, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

type AddItemFormPropsType = {
    addItem: (title: string, note: string) => void
    style?: any
}

export function AddItemForm(props: AddItemFormPropsType) {

    const [note, setNote] = useState("")
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [textField, setTextField] = useState<boolean>(false)

    const onClickHandler = () => {
        setTextField(true)
    }

    const onClickAwayHandler = () => {
        setTextField(false)

    }

    const addItem = () => {
        if (note.trim() !== "") {
            props.addItem(title, note);
            setNote("");
            setTitle("")
            setError(null)
            setTextField(false)
        } else {
            setError("Обязательно!");
        }
    }

    const onChangeNoteHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNote(e.currentTarget.value)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <ClickAwayListener onClickAway={onClickAwayHandler}>
            <div style={{
                display: "flex",
                margin: "auto",
                boxShadow: '1px 3px 1em 0 #dadce0',
                border: '1px solid #dadce0',
                padding: "20px",
                width: "600px",
                borderRadius: "6px"
            }}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {textField &&
                        <TextField
                            placeholder="Введите заголовок"
                            variant="standard"
                            value={title}
                            onChange={onChangeTitleHandler}
                            InputProps={{disableUnderline: true}}
                            style={{marginBottom: 10}}
                        />
                    }
                    <TextField placeholder="Заметка..."
                               variant="standard"
                               onClick={onClickHandler}
                               multiline maxRows={Infinity}
                               helperText={error}
                               error={!!error}
                               value={note}
                               onChange={onChangeNoteHandler}
                               InputProps={{disableUnderline: true}}
                    />
                    {textField && <AddIcon onClick={addItem} fontSize={"medium"}/>

                    }
                </div>
            </div>
        </ClickAwayListener>
    )
}
