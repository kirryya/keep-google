import React, {createContext, useState} from 'react';


const initialValue = {}
export const Context = createContext(initialValue)

type ProviderProps = {
    children: any
}
export const Provider = (props: ProviderProps) => {

    const [todolists, setTodolists] = useState([])
    const [archives, setArchives] = useState([])
    const [trash, setTrash] = useState([])


    return (
        <Context.Provider value={{
            todolists,
            setTodolists,
            archives,
            setArchives,
            trash,
            setTrash
        }}>
            {props.children}
        </Context.Provider>
    );
};
