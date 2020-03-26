import React, { Component } from 'react';
import axios from 'axios';

class start extends Component{
    constructor(props){
        super(props)
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle(event){
        // let url = "http://localhost:8000/api/students/";
        // axios.get(`${url}`)
        axios.get('http://localhost:8000/api/students/')
        .then(res => {
            console.log(res.data);
        })
        //.then((res)=>{console.log(res)})
        .catch(error => {
            console.log("login error", error)
        });
    }

    render () {
        return (
        <div>
            <button onClick={this.clickHandle}>Show Student List</button>
        </div>
        );
    }
}

export default start;