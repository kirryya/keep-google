import React, { FC, memo, useCallback, useContext } from 'react';

import { Delete } from '@mui/icons-material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { NoteContext } from '../../context';
import style from '../../styles/Paper.module.css';

import { ArchiveNoteType } from './types';

export const ArchiveNote: FC<ArchiveNoteType> = memo(
  ({ todolist, removeTask }: ArchiveNoteType) => {
    const { archives, setArchives, setNotes, setTrash } = useContext(NoteContext);

    const onRemoveTaskClick = useCallback(() => {
      removeTask(todolist.id);
    }, [removeTask, todolist.id]);

    const onMoveToNotesClick = useCallback(() => {
      setArchives(archives.filter(tl => tl.id !== todolist.id));
      setNotes(prevArr => [todolist, ...prevArr]);
    }, [setArchives, archives, setNotes, todolist]);

    const onMoveToTrashClick = useCallback(() => {
      setArchives(archives.filter(tl => tl.id !== todolist.id));
      setTrash(prevArr => [todolist, ...prevArr]);
    }, [setArchives, archives, todolist, setTrash]);

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
          <Tooltip title="Переместить в корзину">
            <IconButton onClick={onMoveToTrashClick}>
              <Delete fontSize="small" />
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
