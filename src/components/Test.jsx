import React from 'react'
import Input from './Input'
import Text from './Text'
import Button from './Button'

function Test(props) {
    console.log(props.count);
    return (
        <div>
            <Text text={props.count.text}/>
            <Input fnc={props.fnc}/>
            <Button fnc={props.fncBtn} />
        </div>
    )
}

export default Test
