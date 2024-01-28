import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const verifyAccount = () => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/' />;
    }

    return (
        <div className='container mx-auto mt-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold mb-8'>Verify your Account:</h1>
                <button
                    onClick={verifyAccount}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
