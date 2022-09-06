import React, {FC} from 'react';
import {EmptyNotes} from "../components/common/EmptyNotes";
import {WorkSpaceType} from './types';

export const WorkSpace: FC<WorkSpaceType> = ({Component, searched}) => {

    return (
        searched && searched.length > 0 ? <Component searched={searched}/> : <EmptyNotes/>
    );
};