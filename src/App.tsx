import React from 'react';
import {NotesProvider} from "./context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Notes} from "./components/workSpace/notes/Notes";
import {Archives} from "./components/workSpace/archives/Archives";
import {Trash} from "./components/workSpace/trash/Trash";
import {AppDrawer} from './components/appBar/AppDrawer';

export function App() {
    return (
        <BrowserRouter>
            <NotesProvider>
                <AppDrawer/>
                <Routes>
                    <Route path="/" element={<Notes/>}/>
                    <Route path="/archive" element={<Archives/>}/>
                    <Route path="/trash" element={<Trash/>}/>
                </Routes>
            </NotesProvider>
        </BrowserRouter>
    )
}