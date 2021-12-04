import React from 'react'
import { useState } from 'react';

function Form() {
    const [location, setLocation] = useState('')
    const onSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <form onSubmit={onSubmit}>

            <input aria-label="location" type="text" placeholder="type up location" />


        <button type="submit" onClick={onSubmit}>just search</button>
        </form>
    )
}

export default Form
