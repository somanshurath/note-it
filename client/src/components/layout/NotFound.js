import React, { Fragment, useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Fragment>
            <div class='notfound'>
                <div class='text-center'>
                    <h1>&lt; 404 &gt;
                    </h1>
                    <h3>PAGE NOT FOUND</h3>
                    <Link to={'/'} className='btn btn-dark mt-4 me-4'>
                        Return To Home
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;
