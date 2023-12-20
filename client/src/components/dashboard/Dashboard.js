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
