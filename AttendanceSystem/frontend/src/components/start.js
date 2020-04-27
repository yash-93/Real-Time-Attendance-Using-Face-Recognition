import React, { Component } from 'react';
import axios from 'axios';
import Students from './presentStudents';
import DefaulterStudents from './defaulterStudents';
import 'local-storage';

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
    
    componentDidMount(){
        if(window.sessionStorage.getItem("defaulterList") != null){
            this.setState({
                defaulterList: JSON.parse(window.sessionStorage.getItem("defaulterList"))
            })
        }
        if(window.sessionStorage.getItem("presentList") != null){
            this.setState({
                presentList: JSON.parse(window.sessionStorage.getItem("presentList"))
            })
        }
    }

    presentStudentsClickHandle(event){
        // let url = "http://localhost:8000/api/students/";
        // axios.get(`${url}`)
        axios.get('http://127.0.0.1:8000/api/students/')
        .then(res => {
            this.setState({
                presentList: res.data
            });
            window.sessionStorage.setItem('presentList', JSON.stringify(this.state.presentList))
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
            window.sessionStorage.setItem('defaulterList', JSON.stringify(this.state.defaulterList))
        })
        .catch(error => {
            console.log(error)
        });
    }

    delete(newList){
        this.setState({
            defaulterList: newList,
        });
        window.sessionStorage.setItem('defaulterList', JSON.stringify(newList));
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