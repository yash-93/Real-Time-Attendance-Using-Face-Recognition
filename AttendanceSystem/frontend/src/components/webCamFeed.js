import React, { Component } from 'react';
import Camera from './camera'

class webCamFeed extends Component {
  constructor(){
    super();
   /*  this.state = {
      constraints: { audio: false, video: { width: 400, height: 300 } }
    } */
    
  }

  componentDidMount(){
    var constraints = {audio: true, video: {width: 480, height: 480}};
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream){
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e){
          video.play();
        }
      })
      .catch(function(err){
        console.log(err.name + ":" + "err.message");
      });
  }

  render() {
    return (
      <div>
        <div id="container">
          <video autoPlay={true} id="videoElement"></video>
        </div>
      </div>
    );
  }
}

export default webCamFeed;