import React from "react";
import "./App.css";
import { Component } from "react";


class App extends Component {
  state = {
    person: [
      { name: 'Nikhil ', age: 19 },
      { name: 'Ajay ', age: 19 },
      { name: 'Hrishi ', age: 19 }

    ]
  }
  onCliCkEventListener = () => {
    this.setState ( {
      person: [
        { name: 'Amar ', age: 50 },
        { name: 'Akbar ', age: 40 },
        { name: 'Antony ', age: 30 }
      ]
    })
   }

  render() {
    return (
      <div className="container">
        <div ><p>My name is {this.state.person[0].name}
          and i am {this.state.person[0].age} old</p>
          <p>My name is {this.state.person[1].name}
          and i am {this.state.person[1].age} old</p>
          <p>My name is {this.state.person[2].name}
          and i am {this.state.person[2].age} old</p></div>
        <button className="btn btn-primary" onClick={this.onCliCkEventListener}>Swap</button>
      </div>
    )
  }
}
export default App;
