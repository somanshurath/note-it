import React, { Fragment, useState } from 'react';
import '../../App.css';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Landing = ({auth: { isAuthenticated }}) => {

    if (isAuthenticated) {
        return <Navigate replace to='/dashboard' />;
    }

    return (
        <Fragment>
            <div class='py-5 landing'>
                <div class='p-5 text-center main-cont'>
                    <div class='container pt-5 pb-3'>
                        <h1 class='text-body-emphasis'>
                            Capture Your Thoughts, Anytime, Anywhere!
                        </h1>
                        <p class='col-lg-8 mx-auto lead pt-3'>
                            Your notes are no longer confined to a single
                            device. Our server-based syncing feature ensures that
                            your notes are always up-to-date and accessible from
                            any device, whether you're working from your laptop,
                            tablet, or smartphone. Stay connected to your
                            thoughts and ideas, no matter where your journey
                            takes you.
                        </p>
                    </div>
                    <div class='d-flex justify-content-center mt-2'>
                        <Link
                            to={'/login'}
                            className='btn btn-outline-primary me-4'
                        >
                            Login
                        </Link>
                        <Link
                            to={'/register'}
                            className='btn btn-outline-success'
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Landing.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
