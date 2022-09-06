import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppDrawer } from './components/appBar/AppDrawer';
import { Archives } from './components/workSpace/archives/Archives';
import { Notes } from './components/workSpace/notes/Notes';
import { Trash } from './components/workSpace/trash/Trash';
import { NotesProvider } from './context';
import { ReturnComponentType } from './types/ReturnComponentType';

export const App = (): ReturnComponentType => {
  return (
    <BrowserRouter>
      <NotesProvider>
        <AppDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </NotesProvider>
    </BrowserRouter>
  );
};
