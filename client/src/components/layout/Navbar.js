import React, { Fragment, useState } from 'react';
import noteItLogo from '../../components/public/note-it-logo.png';
import '../../App.css';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <div class='d-flex flex-row-reverse'>
            <Link to={'/'}>
                <button onClick={logout} className='btn btn-danger me-4'>
                    <i className='fa fa-sign-out' aria-hidden='true'></i> Logout
                </button>
            </Link>
            <Link to={'/dashboard'} className='btn btn-warning me-3'>
                Dashboard
            </Link>
            <Link to={'#!'} className='btn btn-warning me-3'>
                <i class="fa fa-plus" aria-hidden="true"></i> Add
            </Link>
        </div>
    );

    const guestLinks = (
        <div class='d-flex flex-row-reverse'>
            <Link to={'/register'} className='btn btn-success me-4'> Register
            </Link>
            <Link to={'/login'} className='btn btn-primary me-3'>
            <i class="fa fa-sign-in" aria-hidden="true"></i> Login
            </Link>
        </div>
    );

    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg'>
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

                    {!loading && (
                        <Fragment>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Fragment>
                    )}
                </div>
            </nav>
        </Fragment>
    );
};

Navbar.Proptypes = {
    logout: Proptypes.func.isRequired,
    auth: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
