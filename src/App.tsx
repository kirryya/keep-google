import React, { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppDrawer } from './components';
import { NotesProvider } from './context';
import { Archives } from './pages/archives/Archives';
import { Notes } from './pages/notes/Notes';
import { TrashNotes } from './pages/trash/TrashNotes';
import { ReturnComponentType } from './types';

import { Path } from 'enums';

export const App: FC = (): ReturnComponentType => {
  return (
    <BrowserRouter>
      <NotesProvider>
        <AppDrawer />
        <Routes>
          <Route path={Path.HOME} element={<Notes />} />
          <Route path={Path.ARCHIVE} element={<Archives />} />
          <Route path={Path.TRASH} element={<TrashNotes />} />
        </Routes>
      </NotesProvider>
    </BrowserRouter>
  );
};
