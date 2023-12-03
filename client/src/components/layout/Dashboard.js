import React, { Fragment, useState } from 'react';
import '../../App.css';
import { Link, Navigate, redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

const Dashboard = ({ auth: { isAuthenticated } }) => {

    if (!isAuthenticated) {
        return <Navigate replace to='/login' />;
    }

    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='mt-5'>Welcome</h1>
                        <p className='lead'>
                            This is a simple note taking app
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='mt-5'>Welcome</h1>
                        <p className='lead'>
                            This is a simple note taking app
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Dashboard.Proptypes = {
    auth: Proptypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
