import React, { Component } from 'react';
import axios from 'axios';
import PresentStudents from './presentStudents';
import DefaulterStudents from './defaulterStudents';

class start extends Component{
    constructor(props){
        super(props);
        this.state = {
            presentList: [],
            defaulterList: []
        }
        this.presentStudentsClickHandle = this.presentStudentsClickHandle.bind(this);
        this.defaulterStudentsClickHandle = this.defaulterStudentsClickHandle.bind(this);
    }

    presentStudentsClickHandle(event){
        // let url = "http://localhost:8000/api/students/";
        // axios.get(`${url}`)
        axios.get('http://localhost:8000/api/students/')
        .then(res => {
            this.setState({
                presentList: res.data
            })
        })
        .catch(error => {
            console.log("login error", error)
        });
    }

    defaulterStudentsClickHandle(event){
        axios.get('http://localhost:8000/api/students/')
        .then(res => {
            this.setState({
                defaulterList: res.data
            })
        })
        .catch(error => {
            console.log("login error", error)
        });
    }

    render () {

        return (
        <div className="container">
            <div className="row">
                <div className="col"><button className="btn btn-primary btn-lg" onClick={this.presentStudentsClickHandle}>Show Present Students List</button></div>
                <div className="col"><button className="btn btn-primary btn-lg" onClick={this.defaulterStudentsClickHandle}>Show Defaulter's List</button></div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col"><PresentStudents presentList={this.state.presentList} /></div>
                <div className="col"><DefaulterStudents defaulterList={this.state.defaulterList}/></div>
            </div>
        </div>
        );
    }
}

export default start;