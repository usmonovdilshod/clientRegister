import { event } from 'jquery';
import React, { Component, useState } from 'react';
import { FaPlus } from 'react-icons/fa';


const AddAppointments = ({ toggleForm, formDisplay }) => {

    const [name, setName] = useState('');
    const [passportId, setPassportId] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');

    const addData = async () => {
        const result = await fetch(`/api/customers`, {
            method: 'post',
            body: JSON.stringify({ name, passportId, phone, price }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        console.log(body);
    }

    return (
        <div
        className={
            'card textcenter mt-3 ' +
            (formDisplay ? '' : 'add-appointment')
        }
        >
            <div className="apt-addheading card-header bg-primary text-white"
                onClick={toggleForm}
            >
                <FaPlus /> Add Client
                </div>

            <div className="card-body">
                <form id="aptForm" noValidate
                >
                    <div className="form-group form-row">
                        <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="name"
                            readOnly
                        >
                            name
                            </label>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row">
                        <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="passportId"
                        >
                            PassportId
                            </label>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="passportId"
                                placeholder="passportId"
                                value={passportId}
                                onChange={(event) => setPassportId(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row">
                        <label
                            className="col-md-2 col-form-label text-md-right"
                            htmlFor="phone"
                        >
                            Phone
                            </label>
                        <div className="col-md-10">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder="phone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row">
                        <label className="col-md-2 text-md-right" htmlFor="price">
                            price
                            </label>
                        <div className="col-md-10">
                            <textarea
                                className="form-control"
                                rows="4"
                                cols="50"
                                name="price"
                                id="price"
                                placeholder="price"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group form-row mb-0">
                        <div className="offset-md-2 col-md-10">
                            <button
                                type="submit"
                                className="btn btn-primary d-block ml-auto"
                                onClick={()=>addData()}
                            >
                                Add Client
                                </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );

}

export default AddAppointments;