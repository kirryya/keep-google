import React, { ChangeEvent, FC, memo, useState } from 'react';

import LoupeOutlinedIcon from '@mui/icons-material/LoupeOutlined';
import { ClickAwayListener, TextField, Tooltip } from '@mui/material';

import { AddItemFormType } from './types';

export const AddItemForm: FC<AddItemFormType> = memo(({ addItem }: AddItemFormType) => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [textField, setTextField] = useState<boolean>(false);

  const onClickHandle = (): void => {
    setTextField(true);
  };

  const onClickAwayHandle = (): void => {
    setTextField(false);
  };

  const addItemHandle = (): void => {
    if (note.trim() !== '') {
      addItem(title, note);
      setNote('');
      setTitle('');
      setError(null);
      setTextField(false);
    } else {
      setError('Обязательное поле!');
    }
  };

  const onChangeNoteHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setNote(e.currentTarget.value);
  };

  const onChangeTitleHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  return (
    <ClickAwayListener onClickAway={onClickAwayHandle}>
      <div
        style={{
          display: 'flex',
          margin: 'auto',
          boxShadow: '1px 3px 1em 0 #dadce0',
          border: '1px solid #dadce0',
          padding: '10px',
          width: '250px',
          borderRadius: '6px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {textField && (
            <TextField
              placeholder="Введите заголовок"
              variant="standard"
              value={title}
              onChange={onChangeTitleHandle}
              InputProps={{ disableUnderline: true }}
              style={{ marginBottom: 10 }}
            />
          )}
          <TextField
            placeholder="Заметка..."
            variant="standard"
            onClick={onClickHandle}
            multiline
            maxRows={Infinity}
            helperText={error}
            error={!!error}
            value={note}
            onChange={onChangeNoteHandle}
            InputProps={{ disableUnderline: true }}
            style={{ width: '250px' }}
          />
          {textField && (
            <Tooltip title="Добавить заметку">
              <LoupeOutlinedIcon
                onClick={addItemHandle}
                fontSize="medium"
                style={{ marginTop: '25px' }}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
});
