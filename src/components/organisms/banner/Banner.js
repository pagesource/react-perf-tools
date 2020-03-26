import React, { useState, useEffect } from 'react';

import Heading from '../../atoms/heading'
import Button from '../../atoms/button'

import './Banner.scss'

const Banner = ({ addTask }) => {
    const [suggestedTasks, setSuggestedTasks] = useState(null);
    let suggestions = <h5>Loading Suggestions...</h5>;

    useEffect(() => {
        fetch('https://react-hooks-caabc.firebaseio.com/tasks.json')
            .then(resp => resp.json())
            .then(data => {
                const suggestions = Object.values(data)
                setSuggestedTasks(suggestions)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (suggestedTasks) {
        suggestions = suggestedTasks.map(item => (
            <Button className="banner__button" key={item} onClick={() => addTask(item)}>{item}</Button>
        ))
    }

    return (
        <>
            <Heading type="h3" className="banner__heading">Suggestions</Heading>
            {suggestions}
        </>
    )
}

export default React.memo(Banner);
