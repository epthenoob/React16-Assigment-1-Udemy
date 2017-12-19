import React from 'react';
import './UserOutput.css';
import UserInput from '../UserInput/UserInput';

const userOutput = (props) => {

    return (
        <div className = "userOutput">
            <UserInput username = {props.username} changeHandler = {props.changeHandler}/>
            <p>Username: {props.username}</p>
            <p>Password: {props.password}</p>
        </div>
    );

}

export default userOutput;