import React, { useState } from 'react';

import Input from '../../atoms/input';
import Button from '../../atoms/button';

import './AddTask.scss';

const AddTask = ({addTask}) => {
    const [task, setTask] = useState();
    // console.warn('Potential memory optimization required as Add Task is re-rendered');

    const addTaskHandler = () => {
        addTask(task)
    }

    const setTaskHandler = (e) => {
        setTask(e.target.value)
    }

    return (
        <>
        {/**
         * [FIX_LIGHTHOUSE_REPORT]
         * Accessibility fix is added at line# 24, Label associated with the input field is added.
         * In order to make it accessible compliant.
         */}
        <label htmlFor='addTask' className="addtask__label">ADD TASK</label>
        <Input id='addTask' className="addtask__input" onChange={e=>setTaskHandler(e)}/>          
        <Button className="addtask__button" onClick={addTaskHandler}>Add Task</Button>
        </>
    )
}

export default React.memo(AddTask);