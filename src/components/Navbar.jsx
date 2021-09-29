import React from 'react'
import logo from "../assets/img/logo/Group.svg"
import logo2 from "../assets/img/logo/Group-1.svg"


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top border-bottom border-white border-2">
            <div className="container-fluid px-5 position-relative">
                <img src={logo} alt="" />
                <img className="position-absolute sit-in-center" src={logo2} alt="" />
                <a className="navbar-brand text-shadow" href="#">Awesome Social</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-4">
                            <a href="#learn" className="nav-link">Features</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a href="#accordion" className="nav-link">Social</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a href="#instructors" className="nav-link">Agencies</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a href="#instructors" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item mx-4">
                            <button className="btn btn-dark btn-lg py-3 custom-border custom-px">Start Free Trial</button>

                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
