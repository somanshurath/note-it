import React, { Fragment, useState } from 'react';
import noteItLogo from '../../components/public/note-it-logo.png';
import '../../App.css';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import axios from 'axios';

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const Submit = async (e) => {
        e.preventDefault();
        login({email, password});   
    };

    if(isAuthenticated){
        <Navigate replace to="/dashboard" />
    }

    return (
        <Fragment>
            <div class='p-5 bg-body-tertiary form m-auto mt-4'>
                <main class='form-signin w-100 '>
                    <form onSubmit={(e) => Submit(e)}>
                        <Link to={'/'}>
                            <img src={noteItLogo} height='80px' />
                        </Link>
                        <h1 class='h3 mt-4 mb-3 fw-normal'>Please sign in.</h1>
                        <div class='form-floating mb-2 mx-auto'>
                            <input
                                type='email'
                                class='form-control'
                                id='floatingInput'
                                placeholder='name@example.com'
                                value={email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <label for='floatingInput'>Email address</label>
                        </div>
                        <div class='form-floating'>
                            <input
                                type='password'
                                class='form-control'
                                id='floatingPassword'
                                placeholder='Password'
                                value={password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <label for='floatingPassword'>Password</label>
                        </div>

                        <button
                            class='btn btn-primary w-100 py-2 mt-4'
                            type='submit'
                        >
                            Sign in
                        </button>
                        <p class='mt-4'>
                            Don't have an account?{' '}
                            <Link to={'/register'}>Register</Link>
                        </p>
                    </form>
                </main>
            </div>
        </Fragment>
    );
};

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {setAlert, login})(Login);
