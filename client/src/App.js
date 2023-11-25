import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Navbar/><Landing /></>} />
            <Route path='/login' element={<><Login/></>} />
            <Route path='/register' element={<><Register/></>} />
        </Routes>
    </BrowserRouter>
);

export default App;
