import React, { ChangeEvent, FC, memo, useState } from 'react';

import { TextField, Typography } from '@mui/material';

import style from '../../../styles/Paper.module.css';
import { EditableSpanType } from '../types';

export const EditableSpan: FC<EditableSpanType> = memo(
  ({ value, onChange }: EditableSpanType) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(value);

    const activateEditMode = (): void => {
      setEditMode(true);
      setTitle(value);
    };
    const activateViewMode = (): void => {
      setEditMode(false);
      if (onChange) {
        onChange(title);
      }
    };

    const changeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
      setTitle(e.currentTarget.value);
    };

    return editMode ? (
      <TextField
        value={title}
        onChange={changeTitle}
        autoFocus
        onBlur={activateViewMode}
        multiline
        maxRows={Infinity}
        className={style.note}
      />
    ) : (
      <Typography onDoubleClick={activateEditMode} className={style.content}>
        {value}
      </Typography>
    );
  },
);
