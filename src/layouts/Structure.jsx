import React from 'react'

{ }

import {
    Outlet,
    Link
} from 'react-router-dom'

import IconLogo from '../assets/icon.png';

function Structure() {
    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary navbar-expand-lg custom-navbar px-4 py-3">
                    <div className="container-fluid">


                        <a className="navbar-brand d-flex align-items-center gap-3" href="/">
                            <div className="logo-placeholder">

                                <img style={{ width: '80px', borderRadius: '50px' }} src={IconLogo} alt="Logo BB" />
                            </div>

                            <div className="brand-text">
                                <h5 className="m-0">ByteBoutique</h5>
                            </div>
                        </a>

                        {/* btn mobile */}
                        <button
                            className="navbar-toggler border-0 shadow-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Menu */}
                        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
                            <ul className="navbar-nav align-items-lg-center gap-lg-3 mt-4 mt-lg-0">

                                <li className="nav-item">
                                    <Link to="/" className="text-decoration-none text-secondary fw-medium px-3 py-2">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/Products" className="text-decoration-none text-secondary fw-medium px-3 py-2">
                                        Our Products
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/Contact" className="text-decoration-none text-secondary fw-medium px-3 py-2">
                                        Contact Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="*" className="text-decoration-none text-secondary fw-medium px-3 py-2">
                                        Who We Are
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                </nav>
            </header>

            <Outlet />

            <footer className="bg-body-tertiary custom-footer px-4 py-4 mt-auto border-top">
                <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">


                    <a className="navbar-brand d-flex align-items-center gap-3 text-decoration-none text-dark" href="/">
                        <div className="logo-placeholder">
                            <img style={{ width: '50px', borderRadius: '50px' }} src={IconLogo} alt="Logo BB" />
                        </div>
                        <div className="brand-text">
                            <h6 className="m-0 fw-bold">ByteBoutique</h6>
                        </div>
                    </a>


                    <ul className="nav align-items-center gap-3 flex-wrap justify-content-center">
                        <li className="nav-item">
                            <Link to="/privacy" className="text-decoration-none text-secondary fw-medium small px-2">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/terms" className="text-decoration-none text-secondary fw-medium small px-2">
                                Terms of Service
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center gap-1 text-secondary fw-medium small px-2">
                            <i className="bi bi-globe2 text-secondary"></i>
                            <span>Florence, Italy</span>
                        </li>
                    </ul>

                    {/* Copyright */}
                    <div className="text-secondary small">
                        <span>© {new Date().getFullYear()} ByteBoutique.</span>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Structure