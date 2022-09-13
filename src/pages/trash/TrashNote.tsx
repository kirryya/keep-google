import React, { FC, memo, useCallback, useContext } from 'react';

import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { NoteContext } from '../../context';
import style from '../../styles/Paper.module.css';
import { ReturnComponentType } from '../../types';

import { DeleteNotesType } from './types';

export const TrashNote: FC<DeleteNotesType> = memo(
  ({ todolist, removeTask }: DeleteNotesType): ReturnComponentType => {
    const { trash, setArchives, setNotes, setTrash } = useContext(NoteContext);

    const onRemoveTaskClick = useCallback(() => {
      removeTask(todolist.id);
    }, [removeTask, todolist]);

    const onMoveToNotesClick = useCallback(() => {
      setTrash(trash.filter(tl => tl.id !== todolist.id));
      setNotes(prevArr => [todolist, ...prevArr]);
    }, [setTrash, trash, todolist, setNotes]);

    const onMoveToArchiveClick = useCallback(() => {
      setTrash(trash.filter(tl => tl.id !== todolist.id));
      setArchives(prevArr => [todolist, ...prevArr]);
    }, [setTrash, trash, todolist, setArchives]);

    return (
      <div>
        <div className={style.note}>
          <h2>
            <Typography className={style.content}>{todolist.title}</Typography>
          </h2>
          <div>
            <Typography className={style.content}>{todolist.content}</Typography>
          </div>
        </div>
        <div style={{ marginTop: '25px', marginLeft: '-10px' }}>
          <Tooltip title="Переместить в заметки">
            <IconButton onClick={onMoveToNotesClick}>
              <LightbulbOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Переместить в архив">
            <IconButton onClick={onMoveToArchiveClick}>
              <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить">
            <IconButton onClick={onRemoveTaskClick}>
              <HighlightOffOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  },
);
