import React, { ChangeEvent, FC, memo, useState } from 'react';

import AddTaskIcon from '@mui/icons-material/AddTask';
import { ClickAwayListener, TextField, Tooltip } from '@mui/material';

import style from './styles/AddItemForm.module.css';
import { AddItemFormType } from './types';

export const AddItemForm: FC<AddItemFormType> = memo(({ addItem }: AddItemFormType) => {
  const [content, setContent] = useState('');
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
    if (content.trim() !== '') {
      addItem(title, content);
      setContent('');
      setTitle('');
      setError(null);
      setTextField(false);
    } else {
      setError('Обязательное поле!');
    }
  };

  const onChangeNoteHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setContent(e.currentTarget.value);
  };

  const onChangeTitleHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  return (
    <ClickAwayListener onClickAway={onClickAwayHandle}>
      <div className={style.appearance}>
        <div className={style.form}>
          {textField && (
            <TextField
              placeholder="Введите заголовок..."
              variant="standard"
              value={title}
              onChange={onChangeTitleHandle}
              InputProps={{ disableUnderline: true }}
              className={style.title}
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
            value={content}
            onChange={onChangeNoteHandle}
            InputProps={{ disableUnderline: true }}
            className={style.content}
          />
          {textField && (
            <Tooltip title="Добавить заметку">
              <AddTaskIcon
                onClick={addItemHandle}
                fontSize="medium"
                className={style.button}
              />
            </Tooltip>
          )}
        </div>
      </div>
    </ClickAwayListener>
  );
});
