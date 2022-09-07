import React, { FC, memo, useCallback, useContext } from 'react';

import { Delete } from '@mui/icons-material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { NoteContext } from '../../context';
import style from '../../styles/Paper.module.css';

import { ArchiveType } from './types';

export const Archive: FC<ArchiveType> = memo(
  ({ todolist, removeTodolist }: ArchiveType) => {
    const { archives, setArchives, setNotes, setTrash } = useContext(NoteContext);

    const removeTodolistHandle = useCallback(() => {
      removeTodolist(todolist.id);
    }, [removeTodolist, todolist.id]);

    const onClickNoteHandle = useCallback(() => {
      setArchives(archives.filter(tl => tl.id !== todolist.id));
      setNotes(prevArr => [todolist, ...prevArr]);
    }, [setArchives, archives, setNotes, todolist]);

    const onClickTrashHandle = useCallback(() => {
      setArchives(archives.filter(tl => tl.id !== todolist.id));
      setTrash(prevArr => [todolist, ...prevArr]);
    }, [setArchives, archives, todolist, setTrash]);

    return (
      <div>
        <div style={{ minWidth: '240px' }}>
          <h2>
            <Typography className={style.content}>{todolist.title}</Typography>
          </h2>
          <div>
            <Typography className={style.content}>{todolist.note}</Typography>
          </div>
        </div>
        <div style={{ marginTop: '25px', marginLeft: '-10px' }}>
          <Tooltip title="Переместить в заметки">
            <IconButton onClick={onClickNoteHandle}>
              <LightbulbOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Переместить в корзину">
            <IconButton onClick={onClickTrashHandle}>
              <Delete fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить">
            <IconButton onClick={removeTodolistHandle}>
              <HighlightOffOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  },
);
