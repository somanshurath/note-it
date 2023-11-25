import React, {Fragment, useState}from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Fragment>
        <div class='my-5'>
            <div class='p-5 text-center bg-body-tertiary'>
                <div class='container pt-5 pb-3'>
                    <h1 class='text-body-emphasis'>
                        Capture Your Thoughts, Anytime, Anywhere!
                    </h1>
                    <p class='col-lg-8 mx-auto lead pt-3'>
                        Your notes are no longer confined to a single device.
                        Our cloud-based syncing feature ensures that your notes
                        are always up-to-date and accessible from any device,
                        whether you're working from your laptop, tablet, or
                        smartphone. Stay connected to your thoughts and ideas,
                        no matter where your journey takes you.
                    </p>
                </div>
                <div class='d-flex justify-content-center'>
                    <Link to={'/login'} className='btn btn-outline-primary me-4'>
                        Login
                    </Link>
                    <Link to={'/register'} className='btn btn-outline-success'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Landing;
