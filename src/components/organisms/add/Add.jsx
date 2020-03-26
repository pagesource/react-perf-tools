import React from 'react';

import AddTask from '../../molecules/addtask';
// import Heading from '../../atoms/heading';

import './Add.scss'

const Add = ({addTask}) => {
    return (
        <>
            {/* <Heading type="h3" className="addtask__heading">ADD TASK</Heading> */}
            <AddTask addTask={addTask}/>
        </>
    )
}

export default React.memo(Add);
