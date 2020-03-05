import React, { Component } from 'react';
import Lists from './components/Lists';
import TestForm from './components/TestForm';

class App extends Component {

  state = {
    nameList: [
      { id: 1, name: 'Pierre', age: 43, sexe: "Masculin"},
      { id: 2, name: 'Justine', age: 34, sexe: "Féminin"}
    ]
  }

  addUser = user => {
    const id = Math.random();
    console.log(user);
    let users = [...this.state.nameList, {...user, id: id}];
    this.setState({
      nameList: users
    })

    console.log(this.state);
  }

  deleteUser = id => {
    let users = this.state.nameList.filter(user => user.id !== id);
    this.setState({
      nameList: users
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Bonjour à tous !</h1>
        <Lists deleteUser={this.deleteUser} nameList={this.state.nameList} />
        <TestForm addUser={this.addUser} />
      </div> 
    );
  }
}

export default App;
