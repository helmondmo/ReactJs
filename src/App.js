import React, { Component } from 'react'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)

    this.state = {
      counter: 1
    }
  }

  add(){
    let count = this.state.counter
    this.setState({
      counter: count + 1
    })
  }

  minus(){
    let count = this.state.counter
    this.setState({
      counter: count - 1
    })
  }


  render(){
    const {counter} = this.state
    return (
      <div className="App">
        <h1>Counter App</h1>
       <p className = {counter >= 0 ? 'green':'red'} >{counter}</p>
       <span><button onClick ={this.add}>Increment</button><button onClick={this.minus}>Decrement</button></span>
      </div>
    );
  }
 
}

export default App;
