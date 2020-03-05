import React, { Component } from 'react';

class TestForm extends Component {

  state = {
    name: null,
    age: null,
    gender: null
  }

  change = e => {
      this.setState({
          [e.target.id]: e.target.value
      });
  }

  submit = e => {
      e.preventDefault();
      this.props.addUser(this.state)
  };

  render() {
    return (
      <div>
          <form onSubmit={this.submit}>
              <label htmlFor="name">Nom:</label>
              <input type="text" id="name" onChange={this.change}/>

              <label htmlFor="age">Age:</label>
              <input type="text" id="age" onChange={this.change}/>

              <label htmlFor="sexe">Sexe:</label>
              <input type="text" id="sexe" onChange={this.change}/>

              <button>envoyer</button>
          </form>
      </div>
    );
  }
}

export default TestForm;
