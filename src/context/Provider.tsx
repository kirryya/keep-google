import React, {createContext, ProviderProps, useState} from 'react';

export const Context = createContext(null)

export const Provider = (props: ProviderProps<any>) => {

    const [notes, setNotes] = useState([])
    const [archives, setArchives] = useState([])
    const [trash, setTrash] = useState([])


    return (
        // @ts-ignore
        <Context.Provider value={{
            notes,
            setNotes,
            archives,
            setArchives,
            trash,
            setTrash
        }}>
            {props.children}
        </Context.Provider>
    );
};
