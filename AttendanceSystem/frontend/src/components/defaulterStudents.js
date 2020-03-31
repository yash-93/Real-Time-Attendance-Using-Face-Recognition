import React, { Component } from 'react';

class defaulterStudents extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Arrival Time</th>
                            <th>Departure Time</th>
                        </tr>
                    </thead>
                    {this.props.defaulterList.map(item => (
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
        );
    }
}

export default defaulterStudents;