import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import donation from '../../assets/donation.jpg'
import logo from '../../assets/Logo.png';

const Navbar = () => {
    const navigate = useNavigate()
    const handleSignOut = async (e) => {
        Swal.fire({
            text: 'Are you sure you want to sign out?',
            icon: 'question',
            title: "SignOut",
            showCancelButton: true,
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut'
            },
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(result => {
            if (result.isConfirmed) {
                signOut(auth)
                navigate('/')
            }
        })
    }
    const [user, loading] = useAuthState(auth)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid text-white">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="" width="40" height="40" />
                    <span>BlDonor</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly border-start" style={{ width: '100%' }}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/request" className="nav-link">Find Blood</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/donate" className="nav-link">Donate</Link>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link hover"><span>Donating Tips</span>
                                <div className="position-absolute bg-white dropdown">
                                    <div>
                                        <h4 className="fw-bold text-dark">How to donate</h4>
                                        <p>How blood donations Help</p>
                                        <p>Types of donation</p>
                                        <p>Common Concern</p>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold text-dark">How to donate</h4>
                                        <p>How blood donations Help</p>
                                        <p>Types of donation</p>
                                        <p>Common Concern</p>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold text-dark">How to donate</h4>
                                        <p>How blood donations Help</p>
                                        <p>Types of donation</p>
                                        <p>Common Concern</p>
                                    </div>
                                    <div>
                                        <img src={donation} alt="" className="w-100 h-100" />
                                    </div>
                                </div></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        {!user ? <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </>
                            : <li className="nav-link" onClick={handleSignOut} style={{ cursor: 'pointer' }}>
                                Signout
                            </li>}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;