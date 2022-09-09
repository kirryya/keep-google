import React, { ChangeEvent, FC, memo, useCallback, useContext, useState } from 'react';

import { TextField } from '@mui/material';
import { v1 } from 'uuid';

import { EditableSpan } from '../../components';
import { NoteContext } from '../../context';
import style from '../../styles/Paper.module.css';
import { ReturnComponentType } from '../../types';

import { ButtonsBar } from './ButtonsBar';
import { NoteType } from './types';

export const Note: FC<NoteType> = memo(
  ({
    todolist,
    removeTask,
    changeTaskTitle,
    addTaskTitle,
    changeTaskContent,
  }: NoteType): ReturnComponentType => {
    const { notes, setArchives, setNotes, setTrash } = useContext(NoteContext);

    const [newTitle, setNewTitle] = useState<boolean>(false);

    const handleAddTitle = (): void => {
      setNewTitle(true);
    };
    const closeAddTitle = (): void => {
      setNewTitle(false);
    };

    const handleCopyTask = useCallback(
      (title: string, content: string): void => {
        setNotes([{ id: v1(), title, content }, ...notes]);
      },
      [setNotes, notes],
    );

    const handleRemoveTask = useCallback(() => {
      removeTask(todolist.id);
    }, [removeTask, todolist.id]);

    const handleAddTaskTitle = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        addTaskTitle(todolist.id, e.currentTarget.value);
      },
      [addTaskTitle, todolist.id],
    );

    const onTaskTitleChange = useCallback(
      (title: string) => {
        changeTaskTitle(todolist.id, title);
      },
      [changeTaskTitle, todolist.id],
    );

    const onTaskContentChange = useCallback(
      (content: string) => {
        changeTaskContent(todolist.id, content);
      },
      [changeTaskContent, todolist.id],
    );

    const onMoveToArchiveClick = useCallback(() => {
      setNotes(notes.filter(tl => tl.id !== todolist.id));
      setArchives(prevArr => [todolist, ...prevArr]);
    }, [setNotes, setArchives, notes, todolist]);

    const onMoveToTrashClick = useCallback(() => {
      setNotes(notes.filter(tl => tl.id !== todolist.id));
      setTrash(prevArr => [todolist, ...prevArr]);
    }, [setNotes, setTrash, notes, todolist]);

    return (
      <div>
        <div className={style.note}>
          {newTitle && (
            <TextField
              value={todolist.title}
              onChange={handleAddTaskTitle}
              onBlur={closeAddTitle}
            />
          )}
          <h2>
            {!newTitle && (
              <EditableSpan value={todolist.title} onChange={onTaskTitleChange} />
            )}
          </h2>

          <div>
            <EditableSpan value={todolist.content} onChange={onTaskContentChange} />
          </div>
        </div>

        <ButtonsBar
          removeTask={handleRemoveTask}
          addTitle={handleAddTitle}
          title={todolist.title}
          moveToArchive={onMoveToArchiveClick}
          moveToTrash={onMoveToTrashClick}
          copyTodolist={() => handleCopyTask(todolist.title, todolist.content)}
        />
      </div>
    );
  },
);
