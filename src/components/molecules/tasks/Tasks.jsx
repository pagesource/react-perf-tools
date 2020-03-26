import React, { useCallback, useMemo } from 'react'

import Table from '../../atoms/table'
import Button from '../../atoms/button'

import './Tasks.scss'

const Tasks = ({list, updateStatus, removeItem}) => {
    const headers = useMemo(() =>
       (
        <tr>
            <td>Date</td>
            <td>Task</td>
            <td>Status</td>
            <td>Action(s)</td>
        </tr>
       ),[]
    )

    const markCompletedHandler = (e) => {
        updateStatus(e.target.id)
    }

    const removeTaskHandler = (e) => {
        removeItem(e.target.id)
    }

    let pendingItems = useCallback(
        list.filter(({status})=>{
            return status === 'pending'
        })
        .map(({date, task, status}) => {
            return (
                <tr key={date}>
                    <td>{new Date(date).toLocaleDateString('en-GB')}</td>
                    <td>{task}</td>
                    <td>{status}</td>
                    <td>
                        <Button 
                            id={date} 
                            type="default"
                            className="tasks__button"
                            onClick={e=>markCompletedHandler(e)}
                        >
                            Mark Complete
                        </Button>
                        <Button 
                            id={date} 
                            type="default"
                            className="tasks__button"
                            onClick={e=>removeTaskHandler(e)}
                        >
                            Remove
                        </Button>
                    </td>
                </tr>
            )
        })
    )

    const completedItems = useCallback(
        list.filter(({status})=>{
            return status === 'completed'
        })
        .map(({date, task, status}) => {
            return (
                <tr key={date}>
                    <td>{new Date(date).toLocaleDateString('en-GB')}</td>
                    <td>{task}</td>
                    <td>{status}</td>
                    <td>
                        ---
                    </td>
                </tr>
            )
        })
    )
    return (
        <>
            <Table header={headers}>
                {pendingItems}
            </Table>
            {(pendingItems.length === 0) && (<div className="tasks__info--empty">No Pending Tasks...</div>)}
            <Table header={headers}>
                {completedItems}
            </Table>
        </>
        
    )
}

export default Tasks