import React, { Component } from 'react';
import './App.css';
// import Webcam from './components/webCamFeed'
import Webcam from './components/webcam';
import Start from './components/start'

class App extends Component {
  render() {
    return (
      <div className="App container" >
        <br></br>
        <Webcam />
        <br></br>
        <Start />
        
      </div>
    );
  }
}

export default App;


