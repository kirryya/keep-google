import React, { FC } from 'react';

import { Delete } from '@mui/icons-material';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import PaddingIcon from '@mui/icons-material/Padding';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { ReturnComponentType } from '../../types';

import { ButtonsBarType } from './types';

export const ButtonsBar: FC<ButtonsBarType> = ({
  moveToArchive,
  moveToTrash,
  title,
  addTitle,
  removeTodolist,
  copyTodolist,
}): ReturnComponentType => {
  return (
    <div style={{ marginTop: '25px', marginLeft: '-10px' }}>
      <Tooltip title="Переместить в архив">
        <IconButton onClick={moveToArchive}>
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Переместить в корзину">
        <IconButton onClick={moveToTrash}>
          <Delete fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Удалить">
        <IconButton onClick={removeTodolist}>
          <HighlightOffOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Копировать заметку">
        <IconButton onClick={copyTodolist}>
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      {!title && (
        <Tooltip title="Добавить заголовок">
          <IconButton onClick={addTitle}>
            <PaddingIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};
