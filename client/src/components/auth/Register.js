import React, { Fragment, useState } from 'react';
import noteItLogo from '../../components/public/note-it-logo.png';
import '../../App.css';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'

const Register = ({setAlert, register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });

    const { username, email, password, password2 } = formData;

    const Submit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({username, email, password});
        }
    };

    if(isAuthenticated){
        return <Navigate replace to="/dashboard" />
    }

    return (
        <Fragment>
            <div className='p-5 form m-auto'>
                <main className='form-signin w-100 '>
                    <form onSubmit={(e) => Submit(e)}>
                        <Link to={'/'}>
                            <img src={noteItLogo} height='80px' />
                        </Link>
                        <h1 className='h3 mt-4 mb-4 fw-normal'>
                            Register a new account.
                        </h1>
                        <div className='form-floating mb-2 mx-auto'>
                            <input
                                type='text'
                                className='form-control'
                                id='username'
                                placeholder='username'
                                value={username}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        username: e.target.value,
                                    })
                                }
                                // required
                            />
                            <label for='username'>Username</label>
                        </div>
                        <div className='form-floating mb-2 mx-auto'>
                            <input
                                type='email'
                                className='form-control'
                                id='floatingInput'
                                placeholder='name@example.com'
                                value={email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                // required
                            />
                            <label for='floatingInput'>Email address</label>
                        </div>
                        <div className='form-floating mb-2'>
                            <input
                                type='password'
                                className='form-control'
                                id='floatingPassword'
                                placeholder='Password'
                                value={password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                                // minLength={6}
                            />
                            <label for='floatingPassword'>Password</label>
                        </div>
                        <div className='form-floating'>
                            <input
                                type='password'
                                className='form-control'
                                id='floatingPassword2'
                                placeholder='Password'
                                value={password2}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password2: e.target.value,
                                    })
                                }
                                // minLength={6}
                            />
                            <label for='floatingPassword2'>
                                Confirm Password
                            </label>
                        </div>

                        <button
                            className='btn btn-success w-100 py-2 mt-4'
                            type='submit'
                        >
                            Register
                        </button>
                        <p className='mt-4'>
                            Have an account? <Link to={'/login'}>Login</Link>
                        </p>
                    </form>
                </main>
            </div>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {setAlert, register})(Register);
