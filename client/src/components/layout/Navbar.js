import React, {Fragment, useState}from 'react';
import noteItLogo from '../../components/public/note-it-logo.png';
import '../../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                <div
                    id='myHeading'
                    className='d-flex align-items-baseline ml-4'
                >
                    <Link to={'/'}>
                        <img src={noteItLogo} height='30px' />
                    </Link>
                    <h1>
                        <Link to={'/'} className='navbar-brand'>
                            Note-it
                        </Link>
                    </h1>
                </div>

                <div class='d-flex flex-row-reverse'>
                    <Link to={'/register'} className='btn btn-success me-4'>
                        Register
                    </Link>
                    <Link to={'/login'} className='btn btn-primary me-3'>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
        </Fragment>
    );
};

const handleRegister = () => {
    window.location.href = '/register';
};

export default Navbar;
