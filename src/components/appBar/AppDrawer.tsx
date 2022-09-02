import React, {useState} from 'react';
import {Box} from '@mui/material';
import {Header} from './Header';
import {SideBar} from './Sidebar';

export const AppDrawer = () => {

    const [open, setOpen] = useState<boolean>(false);

    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Header open={open} handleDrawer={handleDrawer}/>
            <SideBar open={open}/>
        </Box>
    );
}




