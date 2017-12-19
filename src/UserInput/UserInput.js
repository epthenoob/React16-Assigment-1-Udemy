import React from 'react';

const userInput = (props) => {
    
    const style = {
        backgroundColor: 'grey',
        font: 'inherit',
        border: '1px solid',
        padding: '8px',
    };

    return(
        <div style={style}>
            <input type = "text" onChange = {props.changeHandler} value = {props.username}/>
        </div>
    );
}

export default userInput;