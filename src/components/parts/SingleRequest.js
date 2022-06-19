import React from 'react';
import icon from './../../assets/1234347.png';
import { FaUserAlt, FaShareAltSquare } from 'react-icons/fa'

const SingleRequest = ({ req }) => {
    const { name, gender, email, number, hospital, link, area, date, blood, age } = req;
    console.log(link);
    return (
        <div className="card-group mb-5" style={{ width: '96%', margin: 'auto' }}>
            <div className="card col bg-light shadow-lg" style={{ borderRadius: '25px' }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={icon} alt="" height='50px' />
                            <div className="ms-3">
                                <h4>Blood Request</h4>
                                <h5><span className='fw-bold'>Fullfilled</span>: <span className="">{hospital}</span></h5>
                            </div>
                        </div>
                        <div>
                            <span style={{ color: 'gray' }}>
                                Posted on : {date}
                            </span>
                        </div>
                    </div>
                    <div>
                        <iframe title='google-map' src={link} width="100%" height="270" frameBorder="0" style={{ border: "0" }}></iframe>
                    </div>
                    <h1>Donator Details</h1>
                    <div className="d-flex">
                        <div className="d-flex align-items-center w-50">
                            <FaUserAlt style={{ height: '48px', width: '48px' }}></FaUserAlt>
                            <div className="ms-3">
                                <h2>{name}</h2>
                                <h5>Blood Group : {blood === 'APlus' && 'A+'}{blood === 'AMinus' && 'A-'}{blood === 'BPlus' && 'B+'}{blood === 'BMinus' && 'B-'}{blood === 'ABPlus' && 'AB+'}{blood === 'ABMinus' && 'AB-'}{blood === 'OPlus' && '0+'}{blood === 'OMinus' && '0-'}</h5>
                                <h5>Phone : {number}</h5>
                                <h5>Email : {email}</h5>
                                <h5>Gender : {gender}</h5>
                                <h5>Age : {age}</h5>
                                <h5>Area : {area}</h5>
                            </div>
                        </div>
                        <div className="w-50 d-flex justify-content-end align-items-center">
                            <FaShareAltSquare style={{ height: '48px', width: '48px' }}></FaShareAltSquare>
                        </div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, qui error rerum vitae molestias iusto doloribus. Perspiciatis optio neque explicabo.</p>
                </div>
            </div>
        </div>
    );
};

export default SingleRequest;