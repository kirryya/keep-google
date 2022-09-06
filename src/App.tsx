import React, { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppDrawer } from './components/appBar/AppDrawer';
import { Archives } from './components/workSpace/archives/Archives';
import { Notes } from './components/workSpace/notes/Notes';
import { Trash } from './components/workSpace/trash/Trash';
import { NotesProvider } from './context/Context';
import { ReturnComponentType } from './types';

import { Path } from 'enum';

export const App: FC = (): ReturnComponentType => {
  return (
    <BrowserRouter>
      <NotesProvider>
        <AppDrawer />
        <Routes>
          <Route path={Path.HOME} element={<Notes />} />
          <Route path={Path.ARCHIVE} element={<Archives />} />
          <Route path={Path.TRASH} element={<Trash />} />
        </Routes>
      </NotesProvider>
    </BrowserRouter>
  );
};
