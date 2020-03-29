import React, { Component } from 'react';
import axios from 'axios';

class webcam extends Component{
    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(){
        axios.get('http://localhost:8000/api/webcam/')
        .then(res => {
            console.log(res);
        })
        //.then((res)=>{console.log(res)})
        .catch(error => {
            console.log("login error", error)
        });
    }

    render () {
        return (
        <div>
            <button onClick={this.clickHandle}>Turn Cam on and Detect Students</button>
        </div>
        );
    }
}

export default webcam;