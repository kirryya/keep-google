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

    const handleCopyTodolist = useCallback(
      (title: string, content: string): void => {
        setNotes([{ id: v1(), title, content }, ...notes]);
      },
      [setNotes, notes],
    );

    const removeTodolistHandle = useCallback(() => {
      removeTask(todolist.id);
    }, [removeTask, todolist.id]);

    const addTodolistTitleHandle = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        addTaskTitle(todolist.id, e.currentTarget.value);
      },
      [addTaskTitle, todolist.id],
    );

    const changeTodolistTitleHandle = useCallback(
      (title: string) => {
        changeTaskTitle(todolist.id, title);
      },
      [changeTaskTitle, todolist.id],
    );

    const changeTodolistNoteHandle = useCallback(
      (content: string) => {
        changeTaskContent(todolist.id, content);
      },
      [changeTaskContent, todolist.id],
    );

    const onClickArchiveHandle = useCallback(() => {
      setNotes(notes.filter(tl => tl.id !== todolist.id));
      setArchives(prevArr => [todolist, ...prevArr]);
    }, [setNotes, setArchives, notes, todolist]);

    const onClickTrashHandle = useCallback(() => {
      setNotes(notes.filter(tl => tl.id !== todolist.id));
      setTrash(prevArr => [todolist, ...prevArr]);
    }, [setNotes, setTrash, notes, todolist]);

    return (
      <div>
        <div className={style.note}>
          {newTitle && (
            <TextField
              value={todolist.title}
              onChange={addTodolistTitleHandle}
              onBlur={closeAddTitle}
            />
          )}
          <h2>
            {!newTitle && (
              <EditableSpan value={todolist.title} onChange={changeTodolistTitleHandle} />
            )}
          </h2>

          <div>
            <EditableSpan value={todolist.content} onChange={changeTodolistNoteHandle} />
          </div>
        </div>

        <ButtonsBar
          removeTask={removeTodolistHandle}
          addTitle={handleAddTitle}
          title={todolist.title}
          moveToArchive={onClickArchiveHandle}
          moveToTrash={onClickTrashHandle}
          copyTodolist={() => handleCopyTodolist(todolist.title, todolist.content)}
        />
      </div>
    );
  },
);
