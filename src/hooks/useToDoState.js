import { useReducer, useCallback, useMemo } from 'react'

const ADD_TASK = 'ADD_TASK'
const UPDATE_STATUS = 'UPDATE_STATUS'
const REMOVE_ITEM = 'REMOVE_ITEM'

const initialState = [{
    date: '2020-03-19T12:37:48.215Z',
    task: 'Buy grocery',
    status: 'completed'
}, {
    date: '2020-03-18T12:37:48.215Z',
    task: 'Buy planters',
    status: 'completed'
}, {
    date: '2020-03-20T12:37:48.215Z',
    task: 'Plan a hobby',
    status: 'pending'
}, {
    date: '2020-03-24T12:37:48.215Z',
    task: 'Plan a session',
    status: 'pending'
}, {
    date: '2020-03-25T12:37:48.215Z',
    task: 'Deliver a session',
    status: 'pending'
}]

const reducer = (currentState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const updatedState = [...currentState]
            updatedState.push(action.item)
            return updatedState;
        case UPDATE_STATUS:
            const newState = [...currentState]
            newState.map((item) => {
                const itemObj = item;
                if (itemObj.date === action.id) {
                    itemObj.status = 'completed'
                }
                return itemObj
            })
            return newState;
        case REMOVE_ITEM:
            const tempArr = [...currentState]
            const removedState = tempArr.filter(({ date }) => {
                return date !== action.id
            })
            return removedState;
        default:
            return currentState;
    }
}

const useToDoState = () => {
    const [toDoState, dispatch] = useReducer(reducer, initialState);

    /**
     * [WARNING]
     * This is explicit developer created complexity. Strictly for demonstration purposes.
     * DON'T USE THIS AS A REFERENCE ANYWHERE.
     * 
     * [FIX_LIGHTHOUSE_REPORT]
     */
    const getPriority = useMemo(() => {
        let priority = '';
        let val = 10000
        for (let i = val; i > 0; i--) {
            priority = '(!!!)'
        }
        return priority;
    }, [])

    const addTask = useCallback((task) => {
        const t0 = performance.now();
        const taskStr = `${task || 'empty-task'} ${getPriority}`
        const t1 = performance.now();
        console.log(`Call to getPriority approx. took %c ${t1 - t0} ms.`,
            'background: #ccc; color: #ff0000; font-weight:550');
        const taskObj = {
            date: new Date().toISOString(),
            task: taskStr,
            status: 'pending'
        }
        dispatch({ type: ADD_TASK, item: taskObj })
    }, [getPriority]);

    /**
     * [WARNING]
     * This is explicit developer created complexity. Strictly for demonstration purposes.
     * DON'T USE THIS AS A REFERENCE ANYWHERE.
     * 
     * Below code needs to be enabled for useMemo
     */
    // const getPriority = () => {
    //     let priority = '';
    //     let val = 10000
    //     for (let i = val; i > 0; i--) {
    //         priority = '!!!'
    //     }
    //     return priority;
    // }

    // const addTask = useCallback((task) => {
    //     const t0 = performance.now();
    //     const taskStr = `${task || 'empty-task'} -- ${getPriority()}`
    //     const t1 = performance.now();
    //     console.log(`Call to getPriority approx. took ${t1 - t0} ms.`);
    //     const taskObj = {
    //         date: new Date().toISOString(),
    //         task: taskStr,
    //         status: 'pending'
    //     }
    //     dispatch({ type: ADD_TASK, item: taskObj })
    // }, []);

    /**
    * [FIX_LIGHTHOUSE_REPORT]
    * useCallback demonstration
    */

    // const addTask = (task) => {
    //     console.log('add');
    //     const taskObj = {
    //         date: new Date().toISOString(),
    //         task,
    //         status: 'pending'
    //     }
    //     dispatch({ type: ADD_TASK, item: taskObj })
    // };

    const updateStatus = useCallback((id) => {
        dispatch({ type: UPDATE_STATUS, id })
    }, []);

    const removeItem = useCallback((id) => {
        dispatch({ type: REMOVE_ITEM, id })
    }, []);

    return {
        list: toDoState,
        addTask,
        updateStatus,
        removeItem
    }
}

export default useToDoState;