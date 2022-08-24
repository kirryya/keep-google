import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, ClickAwayListener, TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

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
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Название необходимо!");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            addItem();
        }
    }

    return (
        <ClickAwayListener onClickAway={onClickAwayHandler}>
            <div style={{display: "flex", margin: "auto", border: ""}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {textField &&
                        <TextField variant="outlined"
                                   error={!!error}
                                   // value={title}
                                   // onChange={onChangeHandler}
                                   // onKeyPress={onKeyPressHandler}
                                   label="Название"
                                   helperText={error}
                        />
                    }
                    <TextField label="Заметка" onClick={onClickHandler} multiline maxRows={Infinity} helperText={error}  error={!!error}  value={title}  onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                </div>
                <div>
                    <Button variant="contained"
                            onClick={addItem}
                            style={{
                                maxWidth: '40px',
                                maxHeight: '40px',
                                minWidth: '40px',
                                minHeight: '40px',
                                margin: '7px'
                            }}
                    >+</Button>
                </div>
            </div>
        </ClickAwayListener>
    )
}
