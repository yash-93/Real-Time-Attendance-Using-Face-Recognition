import React, { Component } from 'react';

class webCamFeed extends Component {
  componentDidMount(){
//    constraints: { audio: false, video: { width: 400, height: 300 } }
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
        console.log(err.name + ":" + err.message);
      });
  }

  render() {
    return (
      <div>
        <div id="container">
          <video autoPlay={true} id="videoElement" muted></video>
        </div>
      </div>
    );
  }
}

export default webCamFeed;