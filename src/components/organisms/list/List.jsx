import React from 'react';

import Tasks from '../../molecules/tasks'
import Heading from '../../atoms/heading'

import './List.scss';

const List = ({list, updateStatus, removeItem}) => {
    return (
        <>
            <Heading type="h3" className="list__heading">TASK LIST</Heading>
            <Tasks list={list} updateStatus={updateStatus} removeItem={removeItem}/>
        </>
    )
}

export default List;
