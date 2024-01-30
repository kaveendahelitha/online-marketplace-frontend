import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
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
        <div className='flex items-center justify-center h-screen'>
            <div className='border rounded-md p-8'>
                <h1 className='text-3xl font-bold mb-6 text-center'>Register for an Account</h1>
                <p className='text-center mb-4'>Create an account with our Session Auth application</p>
                <form onSubmit={e => onSubmit(e)}>
                    <CSRFToken />
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold'>Username:</label>
                        <input
                            className='form-input w-full mt-1'
                            type='text'
                            placeholder='Username*'
                            name='username'
                            onChange={e => onChange(e)}
                            value={username}
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold'>Password:</label>
                        <input
                            className='form-input w-full mt-1'
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
                        <label className='block text-gray-700 text-sm font-bold'>Confirm Password:</label>
                        <input
                            className='form-input w-full mt-1'
                            type='password'
                            placeholder='Confirm Password*'
                            name='re_password'
                            onChange={e => onChange(e)}
                            value={re_password}
                            minLength='6'
                            required
                        />
                    </div>
                    <button className='btn btn-primary w-full mt-3' type='submit'>Register</button>
                </form>
                <p className='mt-3 text-center'>
                    Already have an Account? <Link to='/login' className='text-blue-500'>Sign In</Link>
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
