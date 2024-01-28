import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        console.log("is on submit", formData)
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />;
    }

    return (
        <div className='container mx-auto mt-5'>
            <form onSubmit={onSubmit}>
                <div className='mb-4'>
                    <input
                        className='border border-gray-300 p-2 w-full'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={onChange}
                        minLength='6'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <input
                        className='border border-gray-300 p-2 w-full'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={onChange}
                        minLength='6'
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
