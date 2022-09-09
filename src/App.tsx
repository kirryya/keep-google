import React, { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppDrawer } from './components';
import { NotesProvider } from './context';
import { ArchiveNotes, Notes, TrashNotes } from './pages';
import { ReturnComponentType } from './types';

import { Path } from 'enums';

const ROUTES = [
  { path: Path.HOME, element: <Notes /> },
  { path: Path.ARCHIVE, element: <ArchiveNotes /> },
  { path: Path.TRASH, element: <TrashNotes /> },
];

export const App: FC = (): ReturnComponentType => {
  return (
    <BrowserRouter>
      <NotesProvider>
        <AppDrawer />

        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </NotesProvider>
    </BrowserRouter>
  );
};
