import React, { Component } from 'react';
import axios from 'axios';
import Students from './presentStudents';
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
        this.delete = this.delete.bind(this);
    }

    presentStudentsClickHandle(event){
        // let url = "http://localhost:8000/api/students/";
        // axios.get(`${url}`)
        axios.get('http://127.0.0.1:8000/api/students/')
        .then(res => {
            this.setState({
                presentList: res.data
            })
        })
        .catch(error => {
            console.log(error)
        });
    }

    defaulterStudentsClickHandle(event){
        axios.get('http://127.0.0.1:8000/api/defaulters/')
        .then(res => {
            this.setState({
                defaulterList: res.data
            });
        })
        .catch(error => {
            console.log(error)
        });
    }

    delete(newList){
        this.setState({
            defaulterList: newList,
        });
    }

    render () {
        return (
        <div className="container">
            <div className="row">
                <div className="col"><button className="btn btn-success btn-lg" onClick={this.presentStudentsClickHandle}>Show Present Student List</button></div>
                <div className="col"><button className="btn btn-danger btn-lg" onClick={this.defaulterStudentsClickHandle}>Show Defaulter List</button></div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col">
                    <div className="col"><Students presentList={this.state.presentList}/></div>
                </div>
                <div className="col">
                    <div className="col"><DefaulterStudents defaulterList={this.state.defaulterList} delete={this.delete}/></div>
                </div>


            </div>
        </div>
        );
    }
}

export default start;