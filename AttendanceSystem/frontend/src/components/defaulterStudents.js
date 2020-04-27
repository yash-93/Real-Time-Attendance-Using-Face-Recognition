import React, { Component } from 'react';

class defaulterStudents extends Component{
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(id){
        var newList = this.props.defaulterList.filter(el => {
            return el.id != id;
        });
        this.props.delete(newList);
    }

    render() {

    const st = {
            color: 'red',
            cursor: 'pointer'
        }

        return(
            <div>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Arrival Time</th>
                            <th>Departure Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    {this.props.defaulterList.map(item => (
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.arrival_time}</td>
                                <td>{item.departure_time}</td>
                                <td><div onClick={() => { this.delete(item.id) }} style={st}><i className="fas fa-times"></i></div></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        );
    }
}

export default defaulterStudents;