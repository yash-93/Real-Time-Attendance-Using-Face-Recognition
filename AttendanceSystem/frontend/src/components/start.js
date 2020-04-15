import React, { Component } from 'react';
import axios from 'axios';
// import Students from './Students';
// import DefaulterStudents from './defaulterStudents';

class start extends Component{
    constructor(props){
        super(props);
        this.state = {
            presentList: [],
            defaulterList: []
        }
        this.presentStudentsClickHandle = this.presentStudentsClickHandle.bind(this);
        this.defaulterStudentsClickHandle = this.defaulterStudentsClickHandle.bind(this);
        this.removeFromDefaulter = this.removeFromDefaulter.bind(this);
    }

    removeFromDefaulter(str){
        return function() {
            alert(str)
          }
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
            console.log("login error", error)
        });
    }

    defaulterStudentsClickHandle(event){
        axios.get('http://127.0.0.1:8000/api/defaulters/')
        .then(res => {
            this.setState({
                defaulterList: res.data
            });
            console.log(res.data);
        })
        .catch(error => {
            console.log("login error", error)
        });
    }

    render () {

        const st = {
            color: 'red',
            cursor: 'pointer'
        }

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
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Arrival Time</th>
                            <th>Departure Time</th>
                        </tr>
                    </thead>
                    {this.state.presentList.map(item => (
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.arrival_time}</td>
                                <td>{item.departure_time}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                </div>
                <div className="col">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Arrival Time</th>
                            <th>Departure Time</th>
                        </tr>
                    </thead>
                    {this.state.defaulterList.map(item => (
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.arrival_time}</td>
                                <td>{item.departure_time}</td>
                                <td><div style={st}><i onClick={this.removeFromDefaulter(item.id)} className="fas fa-times"></i></div></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                </div>
                {/* <div className="col"><Students presentList={this.state.presentList} defaulterList={this.state.defaulterList}/></div> */}
                {/* <div className="col"><DefaulterStudents defaulterList={this.state.defaulterList}/></div> */}
            </div>
        </div>
        );
    }
}

export default start;