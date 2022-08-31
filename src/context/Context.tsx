import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

export type NoteType = {
    id: string
    title: string
    note: string
}

type ContextType = {
    notes: NoteType[]
    setNotes: Dispatch<SetStateAction<NoteType[]>>
    archives: NoteType[]
    setArchives: Dispatch<SetStateAction<NoteType[]>>
    trash: NoteType[]
    setTrash: Dispatch<SetStateAction<NoteType[]>>
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

export const noteContextDefaultValue: ContextType = {
    notes: [],
    setNotes: () => [],
    archives: [],
    setArchives: () => [],
    trash: [],
    setTrash: () => [],
    search: "",
    setSearch: () => {},
}

export const NoteContext = createContext<ContextType>(noteContextDefaultValue);

export const NotesProvider = ({children}: { children: ReactNode }) => {
    const [notes, setNotes] = useState<NoteType[]>([]);
    const [archives, setArchives] = useState<NoteType[]>([]);
    const [trash, setTrash] = useState<NoteType[]>([]);
    const [search, setSearch] = useState<string>("");

    const value = {notes, setNotes, archives, setArchives, trash, setTrash, search, setSearch}

    return <NoteContext.Provider value={value}>
        {children}
    </NoteContext.Provider>;
};




