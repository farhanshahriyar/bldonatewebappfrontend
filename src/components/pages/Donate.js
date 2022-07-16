import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BarWave } from "react-cssfx-loading";
import { format } from 'date-fns';

const Donate = () => {
    const areas = ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Satkhira', 'Narail', 'Meherpur', 'Magura', 'Kushtia', 'Khulna', 'Jhenaidah', 'Jashore', 'Chuadanga', 'Bagerhat', 'Sylhet', 'Sunamganj', 'Maulvibazar', 'Habiganj', 'Rangamati', 'Noakhali', 'Lakshmipur', 'Khagrachari', 'Feni', "Cox's Bazar", 'Cumilla', 'Chattogram', 'Chandpur', 'Brahmanbaria', 'Bandarban', 'Pirojpur', 'Patuakhali', 'Jhalokati', 'Bhola', 'Barishal', 'Barguna', 'Thakurgaon', 'Rangpur', 'Panchagarh', 'Nilphamari', 'Lalmonirhat', 'Kurigram', 'Gaibandha', 'Dinajpur', 'Sirajgonj', 'Rajshahi', 'Pabna', 'Nawabganj', 'Natore', 'Naogaon', 'Joypurhat', 'Bogura', 'Tangail', 'Sherpur', 'Shariatpur', 'Rajbari', 'Netrokona', 'Narsingdi', 'Kishoreganj', 'Narayanganj', 'Mymensingh', 'Munshiganj', 'Manikganj', 'Madaripur']
    const [loading, setLoading] = useState(false)
    const handleDonate = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { data } = await axios.post('https://rocky-fortress-35154.herokuapp.com/donate', {
            name: e.target.name.value,
            gender: e.target.gender.value,
            email: e.target.email.value,
            number: e.target.number.value,
            age: e.target.age.value,
            hospital: e.target.hospital.value,
            link: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239086815!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1654447589506!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
            area: e.target.area.value,
            blood: e.target.blood.value,
            date: format(new Date(), 'PP')
        })
        if (data.acknowledged) {
            Swal.fire({
                title: 'Success',
                text: 'Successfully added your info to donation list',
                icon: 'success',
                showClass: {
                    popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__rollOut'
                },

            })
        }
        else {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon: 'error',
                showClass: {
                    popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__rollOut'
                },

            })
        }
        setLoading(false)
        e.target.reset()
    }
    return (
        <div style={{ minHeight: '600px' }} className="d-flex justify-content-center align-items-center">
            <div className="login-container">
                <form onSubmit={handleDonate}>
                    <label className="form-label " htmlFor="form2Example1">Name</label>
                    <input type="text" id="form2Example1" className="form-control" style={{ backgroundColor: '#F5F5F5' }} placeholder="Enter your name" name='name' required />
                    <div className="input-group mb-3 my-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                        <select className="form-select" id="inputGroupSelect01" required defaultValue={``} name="gender" style={{ backgroundColor: '#F5F5F5' }}>
                            <option value="" disabled>Choose your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                    </div>
                    <div className="input-group mb-3 my-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Blood Group</label>
                        <select className="form-select" id="inputGroupSelect01" required defaultValue={``} name="blood" style={{ backgroundColor: '#F5F5F5' }}>
                            <option value="" disabled>Choose your blood group</option>
                            <option value='APlus'>A+</option>
                            <option value='AMinus'>A-</option>
                            <option value='BPlus'>B+</option>
                            <option value='BMinus'>B-</option>
                            <option value='OPlus'>O+</option>
                            <option value='0Minus'>0-</option>
                            <option value='ABPlus'>AB+</option>
                            <option value='ABMinus'>AB-</option>
                        </select>
                    </div>
                    <label className="form-label " htmlFor="form2Example2">Email Address</label>
                    <input type="email" id="form2Example2" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required placeholder="Enter your email" name='email' />
                    <label className="form-label " htmlFor="form2Example5">Area</label>
                    <select defaultValue="" name='area' style={{ backgroundColor: '#F5F5F5' }} required className="form-select">
                        <option value="" disabled>Select Your Area</option>
                        {areas.map(area => <option value={area}>{area}</option>)}
                    </select>
                    <label className="form-label " htmlFor="form2Example3">Phone Number</label>
                    <input type="tel" placeholder="Enter your phone" id="form2Example3" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required name="number" />
                    <label className="form-label " htmlFor="form2Example4">Age</label>
                    <input type="number" placeholder="Enter your age" id="form2Example4" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="age" required />
                    <label className="form-label " htmlFor="form2Example6">Hospital Name</label>
                    <input type="text" placeholder="Enter Hospital Name" id="form2Example6" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="hospital" required />
                    {loading &&
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="my-4">
                            <BarWave color="#FF0000" width="100px" height="20px" duration="1s" />
                        </div>
                    }
                    <button style={{ width: '100%' }} className="btn btn-dark d-block my-3" type='submit'>Donate Now</button>
                </form>
            </div>
        </div>
    );
};

export default Donate;