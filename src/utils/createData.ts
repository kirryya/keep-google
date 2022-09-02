import {NoteType} from "../types";

export const createData = (notes: NoteType[], search: string) => {
    return (
        notes.filter(tl => tl.title.toLowerCase().includes(search.toLowerCase()) || tl.note.toLowerCase().includes(search.toLowerCase()))
    )
}
