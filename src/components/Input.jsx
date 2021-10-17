import React from 'react'

function Input(props) {

    return (
        <div>
            <input type="text" name="input" onChange={e => props.fnc(e.target.value)} placeholder="Type here"/>
        </div>
    )
}

export default Input
