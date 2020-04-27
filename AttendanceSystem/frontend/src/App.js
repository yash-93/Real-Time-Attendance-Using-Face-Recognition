import React, { Component } from 'react';
import './App.css';
import Webcam from './components/webcam';
import Start from './components/start'
// import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      imageArr: []
  }
  }

  // componentDidMount(){
  //   axios.get('http://127.0.0.1:8000/api/videoFeed/')
  //       .then(res => {
  //           this.setState({
  //               imageArr: res
  //           });
  //           console.log(res);
  //       })
  //       .catch(error => {
  //           console.log("************video feed error**********", error)
  //       });
  // }

  render() {
    return (
      <div className="App container" >
        {/* {this.state.imageArr.map((val, index) => (
          <img src="data:image/jpg;base64, [your byte array]" id={index}></img>
        ))} */}

        <br></br>
        <Webcam />
        <br></br>
        <br></br>
        <Start />
        
      </div>
    );
  }
}

export default App;


