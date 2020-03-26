import React from 'react';
import './App.css';
import Webcam from './components/webCamFeed'
import Start from './components/start'

function App() {
  return (
    <div className="App">
        <Webcam />
        <Start />
    </div>
  );
}

export default App;
