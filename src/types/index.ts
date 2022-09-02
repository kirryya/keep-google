import {Dispatch, SetStateAction} from "react";

export type NoteType = {
    id: string
    title: string
    note: string
}

export type ContextType = {
    notes: NoteType[]
    setNotes: Dispatch<SetStateAction<NoteType[]>>
    archives: NoteType[]
    setArchives: Dispatch<SetStateAction<NoteType[]>>
    trash: NoteType[]
    setTrash: Dispatch<SetStateAction<NoteType[]>>
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

export type WorkSpacePropsType = {
    searched: NoteType[] | null
}

export type HeaderType = {
    open: boolean
    handleDrawer: () => void
}