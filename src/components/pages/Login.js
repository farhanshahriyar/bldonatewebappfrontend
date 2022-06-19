import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { BarWave } from "react-cssfx-loading";
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import Loading from '../parts/Loading';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const [initUser, loading1] = useAuthState(auth)
    useEffect(() => {
        if (initUser) {
            navigate('/')
        }
    }, [initUser])
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const handleLogin = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
    }
    useEffect(() => {
        if (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                showClass: {
                    popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__rollOut'
                },

            })
        }
    }, [error])
    useEffect(() => {
        if (user) {
            navigate('/')
            toast.success('Successfully Signed In')
        }
    }, [user])
    if (loading1) {
        return <Loading></Loading>
    }
    return (
        <div style={{ minHeight: '600px' }} className="d-flex align-items-center justify-content-center">
            <div className="login-container">
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input type="email" placeholder="Enter your email" id="form2Example1" name="email" className="form-control" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" name="password" className="form-control" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    {loading &&
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="my-4">
                            <BarWave color="#FF0000" width="100px" height="20px" duration="1s" />
                        </div>
                    }

                    <button type="submit" className="btn btn-dark  btn-block d-block mb-4 mx-auto py-3 px-5">Login</button>

                    <div className="text-center">
                        <p>New user? <Link to='/signup' className="text-decoration-none">Signup</Link> Now </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;