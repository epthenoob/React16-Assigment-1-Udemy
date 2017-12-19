import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames :[
      {username: 'Eko', password: 12345},
      {username: 'Andi', password: 23456}
    ]
  };

  whenClickHandler = () =>{
    this.setState(
      {
        usernames :[
          {username: 'John', password: 12345},
          {username: 'Brian', password: 23456}
        ]
      }
    )
  };

  whenChangeHandler = (event) => {
    this.setState(
      {
        usernames :[
          {username: event.target.value, password: 12345},
          {username: 'Brian', password: 23456}
        ]
      }
    )
  };

  render() {


    return (
      <div className = "App">
        <h1>Assigment 1</h1>       
        <button onClick = {this.whenClickHandler}>Submit</button>
        <UserOutput
            changeHandler = {this.whenChangeHandler} 
            username = {this.state.usernames[0].username} 
            password = {this.state.usernames[0].password}
        />
        <UserOutput
            changeHandler = {this.whenChangeHandler}  
            username = {this.state.usernames[1].username} 
            password = {this.state.usernames[1].password}
        />
      </div>
    );
  }
}

export default App;
