import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import funcs from './utilities/app-methods';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '', 
      person: {}
    }
  }
  handleChange(val) {
    this.setState({
      input: funcs.nameValidation(val)
    })
  }
  getPeople() {
    let results = funcs.getPeopleRequest();
    results
    .then(personObj => {
      console.log('second .then', personObj)
      this.setState({
        person: personObj
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.input}</h1>
        <input onChange={(e)=> this.handleChange(e.target.value)}/>
        <h1>Name: {this.state.person.name}</h1>
        <button onClick={()=>this.getPeople()}>Get some people</button>
      </div>
    );
  }
}

export default App;
