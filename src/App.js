import React from 'react';
import logo from './logo.svg';
import './App.css';


// Ajax = 
// Asynchronos
// JavaScript
// And 
// XML

import axios from 'axios';
const API_ENDPOINT = 'https://swapi.co/api/people/1/';

function urlForId(id) {
  return `https://swapi.co/api/people/${id}/`;
}



// fetch(API_ENDPOINT)
//     .then(r => r.json())
//     .then(data => {
//         console.log(data)
//     })    

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      currentId: 15
    }
  }

  componentDidMount() {
    // This is the method that react calls after the component has been attached to the DOM as a real element
    // This is the first React method where it is safe to call this.setState
  //   axios.get(urlForId(this.state.currentId))
  //     .then(response => {
  //       console.log(response.data.name);
  //       // name = response.data.name;
  //       this.setState({
  //         name: response.data.name
  //       })
  //   })
  this._makeAjaxRequest();
  }


  render () {

    return (
      <div className="App">
        <header className="App-header">
          {
          this.state.name || <img src={logo} />
          }
          <button onClick={this._getNextCharacter}>
            💥💥💥
          </button>
        </header>
      </div>
    );
  }


_getNextCharacter = () => {
  this.setState({
    currentId: this.state.currentId + 1
  }, () => {
    console.log(`New currentId is ${this.state.currentId}`);
    this._makeAjaxRequest();
  });
}

_makeAjaxRequest = () => {
  axios.get(urlForId(this.state.currentId))
      .then(response => {
        console.log(response.data.name);
        // name = response.data.name;
        this.setState({
          name: response.data.name
        })
    })
    .catch(err => {
      this._getNextCharacter();
    })
  }
}





export default App;
