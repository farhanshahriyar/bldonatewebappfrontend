import React from 'react';
import a1 from '../../assets/a1.jpg';
import a2 from '../../assets/a2.jpg';
import a3 from '../../assets/a3.jpg';

const Article = () => {
    return (
        <>
            <h1 className='text-center fw-bold mb-4'>Popular Articles</h1>
            <div className="mx-auto mb-5 d-flex justify-content-between flex-column flex-sm-row gap-3" style={{ width: '90%' }}>
                <div className="d-flex flex-column border p-3 shadow">
                    <img src={a1} alt="" className="w-100" />
                    <h4 className="fw-bold my-3">Heading</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi numquam quos, temporibus voluptatibus velit vel rerum modi quibusdam. Pariatur, corporis!</p>
                    <button className="d-block mx-auto btn btn-danger">LEARN MORE</button>
                </div>
                <div className="d-flex flex-column border p-3 shadow">
                    <img src={a2} alt="" className="w-100" />
                    <h4 className="fw-bold my-3">Heading</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi numquam quos, temporibus voluptatibus velit vel rerum modi quibusdam. Pariatur, corporis!</p>
                    <button className="d-block mx-auto btn btn-danger">LEARN MORE</button>
                </div>
                <div className="d-flex flex-column border p-3 shadow">
                    <img src={a3} alt="" className="w-100" />
                    <h4 className="fw-bold my-3">Heading</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi numquam quos, temporibus voluptatibus velit vel rerum modi quibusdam. Pariatur, corporis!</p>
                    <button className="d-block mx-auto btn btn-danger">LEARN MORE</button>
                </div>
            </div>
        </>

    );
};

export default Article;