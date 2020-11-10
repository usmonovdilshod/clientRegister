import React, { Component } from 'react';
import {AiFillDelete} from 'react-icons/ai'
import Moment from 'react-moment';

class ListAppointments extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div className="pet-item col media py-3" key={item.aptId}>
                        <div className="mr-3">
                            <button className="pet-delete btn btn-sm btn-danger"
                                onClick={() => this.props.deleteAppointment(item)}>
                                <AiFillDelete />
                            </button>
                        </div>

                        <div className="pet-info media-body">
                            <div className="pet-head d-flex">
                                <span className="pet-name"
                                >{item.name}</span>
                                <span className="apt-date ml-auto">
                                <span className="label-item">Passport Id :</span>
                                    {item.passportId}
                                </span>
                            </div>

                            <div className="owner-name">
                                <span className="label-item">Phone:</span>
                                <span
                                >{item.phone}</span>
                            </div>
                            <div className="owner-name">
                                <span className="label-item">Date: </span>
                                <span
                                ><Moment
                                date={item.date}
                                />
                                </span>
                            </div>
                            <div className="apt-notes"
                            ><span className="label-item">Price and extra information: </span>{item.price}</div>
                        </div>
                    </div>
                ))}

            </div>

        )
    }
}

export default ListAppointments