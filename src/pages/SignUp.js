import React, { useState } from 'react';
import {Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import CSRFToken from '../components/CSRFToken';

const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_password: ''
    });
    const [accountCreated, setAccountCreated] = useState(false);

    const { username, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(username, password, re_password);
            setAccountCreated(true);
        }
    };

    if (isAuthenticated)
        return <Navigate to='/dashboard' />;
    else if (accountCreated)
        return <Navigate to='/login' />;

    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-3xl font-bold'>Register for an Account</h1>
            <p>Create an account with our Session Auth application</p>
            <form onSubmit={e => onSubmit(e)} className='mt-5'>
                <CSRFToken />
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Username:</label>
                    <input
                        className='border rounded w-full py-2 px-3'
                        type='text'
                        placeholder='Username*'
                        name='username'
                        onChange={e => onChange(e)}
                        value={username}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Password:</label>
                    <input
                        className='border rounded w-full py-2 px-3'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        onChange={e => onChange(e)}
                        value={password}
                        minLength='6'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Confirm Password:</label>
                    <input
                        className='border rounded w-full py-2 px-3'
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        onChange={e => onChange(e)}
                        value={re_password}
                        minLength='6'
                        required
                    />
                </div>
                <button className='bg-blue-500 text-white py-2 px-4 rounded' type='submit'>Register</button>
            </form>
            <p className='mt-3 text-gray-600'>
                Already have an Account? <Link to='/login' className='text-blue-500'>Sign In</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);