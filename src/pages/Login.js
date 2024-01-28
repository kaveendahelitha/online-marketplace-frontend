import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import CSRFToken from '../components/CSRFToken';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(username, password);
    };

    if (isAuthenticated)
        return <Navigate to='/dashboard' />;

    return (
        <div className='container mx-auto mt-5 p-5 max-w-md bg-white shadow-md'>
            <h1 className='text-2xl font-semibold'>Log In</h1>
            <p className='text-gray-600'>Sign into your Session Auth account</p>
            <form onSubmit={e => onSubmit(e)}>
                <CSRFToken />
                <div className='mb-4'>
                    <label className='block text-gray-600 text-sm font-semibold mt-2'>Username:</label>
                    <input
                        className='border border-gray-300 p-2 w-full'
                        type='text'
                        placeholder='Username*'
                        name='username'
                        onChange={e => onChange(e)}
                        value={username}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-600 text-sm font-semibold mt-2'>Password:</label>
                    <input
                        className='border border-gray-300 p-2 w-full'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        onChange={e => onChange(e)}
                        value={password}
                        minLength='6'
                        required
                    />
                </div>
                <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded' type='submit'>Login</button>
            </form>
            <p className='mt-3 text-gray-600'>
                Don't have an account? <Link to='/signup' className='text-blue-500'>Sign Up</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
