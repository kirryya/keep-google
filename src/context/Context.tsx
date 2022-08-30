import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

export type NoteType = {
    id: string
    title: string
    note: string
}

type ContextType = {
    notes: NoteType[]
    setNotes: Dispatch<SetStateAction<NoteType[]>>
}

export const noteContextDefaultValue: ContextType = {
    notes: [],
    setNotes: () => [],
}

export const NoteContext = createContext<ContextType>(noteContextDefaultValue);

export const NotesProvider = ({children}: { children: ReactNode }) => {
    const [notes, setNotes] = useState<NoteType[]>([]);
    const value = {notes, setNotes}

    return <NoteContext.Provider value={value}>
        {children}
    </NoteContext.Provider>;
};




