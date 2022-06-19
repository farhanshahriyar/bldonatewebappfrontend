import React from 'react'

const dashboard = () => {
  return (
    <div  style={{ minHeight: "600px" }}>

        <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                    <h2 className="fs-2 m-0">Dashboard</h2>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">120</h3>
                                <p className="fs-5">Total User</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">75</h3>
                                <p className="fs-5">Available Blood</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">40</h3>
                                <p className="fs-5">Not Available</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">%25</h3>
                                <p className="fs-5">User Increase</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <h3 className="fs-4 mb-3">Information</h3>
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">Blood</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Area</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>A+</td>
                                    <td>Shaiful Islam</td>
                                    <td>30</td>
                                    <td>saiful2022@gmail.com</td>
                                    <td>017324234xxxx</td>
                                    <td>Farmgate</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>


  )
}

export default dashboard