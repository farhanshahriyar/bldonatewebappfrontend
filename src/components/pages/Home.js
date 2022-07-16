import React from 'react';
import Banner from '../parts/Banner';
import image1 from '../../assets/image-1.png'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'
import image4 from '../../assets/image-4.png'
import image6 from '../../assets/image-6.jpg'
import Article from '../parts/Article';
import { Link } from 'react-router-dom';
import News from '../parts/News';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Article />
            <div className="banner-next d-flex align-items-center mb-5">
                <div className="ps-5">
                    <h3 className="text-white mb-3">Patients are counting on you now !</h3>
                    <h5 className='text-white mb-3'>Donate blood can save a peoples life. Don't delay. <Link to="/donate" className="text-white">Donate Now</Link>
                    </h5>
                </div>
            </div>
            <h3 className="text-center mb-4">Top Hospital List</h3>
            <div className="card-group row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5" style={{ width: '96%', margin: 'auto' }}>
                <div className="card col rounded-3 bg-light shadow-lg">
                    <img src={image1} className="card-img-top w-full" alt="..." height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">BIRDEM General Hospital</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="https://birdembd.org/">See more</a>
                    </div>
                </div>
                <div className="card mx-0 mx-sm-4 col rounded-3 bg-light shadow-lg">
                    <img src={image2} className="card-img-top w-full" alt="..." height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">United Hospital Limited</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <a href="https://www.uhlbd.com/">See more</a>
                    </div>
                </div>
                <div className="card col rounded-3 bg-light shadow-lg">
                    <img src={image3} className="card-img-top w-full" alt="..." height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">Central Hospital Limited</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <a href="https://centralhospitalltdbd.com/">See more</a>
                    </div>
                </div>
            </div>









            <h3 className="text-center mb-4">Top NGO List</h3>
            <div className="card-group row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5" style={{ width: '96%', margin: 'auto' }}>
                <div className="card col rounded-3 bg-light shadow-lg">
                    <img src={image4} className="card-img-top w-full" alt="..." height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">Blood Man</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="https://www.bloodman.org/">See more</a>
                    </div>
                </div>
                <div className="card mx-0 mx-sm-4 col rounded-3 bg-light shadow-lg">
                    <img src={image2} className="card-img-top w-full" alt="..." height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">United Hospital Limited</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <a href="https://www.uhlbd.com/">See more</a>
                    </div>
                </div>
                <div className="card col rounded-3 bg-light shadow-lg">
                    <img src={image6} className="card-img-top w-full" alt="..." height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">Evercare Hospital Dhaka</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <a href="https://www.evercarebd.com/dhaka/">See more</a>
                    </div>
                </div>
            </div>
            <News />
        </div>
    );
};

export default Home;