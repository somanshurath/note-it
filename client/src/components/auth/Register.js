import React, { Fragment, useState } from 'react';
import noteItLogo from '../../components/public/note-it-logo.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
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
            console.log('Passwords do not match');
        } else {
            console.log('Success');
        }
    };

    return (
        <Fragment>
            <div className='p-5 bg-body-tertiary form m-auto mt-5'>
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
                            />
                            <label for='floatingPassword2'>
                                Confirm Password
                            </label>
                        </div>

                        <button
                            className='btn btn-primary w-100 py-2 mt-4'
                            type='submit'
                        >
                            Sign in
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

export default Register;
