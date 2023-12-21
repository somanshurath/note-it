import './App.css';
import React, { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import NotFound from './components/layout/NotFound';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/layout/Footer';
import Notes from './components/notes/Notes';
import { loadUser } from './actions/auth';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useState(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Navbar />
                                <Landing />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path='/login'
                        element={
                            <>
                                <Navbar />
                                <Alert />
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path='/register'
                        element={
                            <>
                                <Navbar />
                                <Alert />
                                <Register />
                            </>
                        }
                    />
                    <Route
                        path='/dashboard'
                        element={
                            <>
                                <Navbar />
                                <Alert />
                                {/* <Form /> */}
                                <Dashboard />
                                <Notes />
                            </>
                        }
                    />
                    <Route
                        path='*'
                        element={
                            <>
                                <NotFound />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
