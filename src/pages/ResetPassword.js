import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />;
    }

    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-2xl font-bold mb-4'>Request Password Reset:</h1>
            <form onSubmit={onSubmit}>
                <div className='mb-4'>
                    <input
                        className='border border-gray-300 p-2 w-full'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded' type='submit'>
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);
