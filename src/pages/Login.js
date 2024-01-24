
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-white">
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={e => onSubmit(e)} className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Log in to our platform</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => onChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com" 
                required
            />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={e => onChange(e)}
                minLength="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
            />
        </div>

        <button
            type="submit"
            className="w-full text-white bg-custom-orange hover:bg-amber-100 hover:text focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
             text-sm px-5 py-2.5 text-center
             "
        >
            Login
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Forgot your Password? <Link to="/reset-password" className="text-blue-700 hover:underline dark:text-blue-500">Reset Password</Link>
        </div>
    </form>
</div>
</div>
</div>

    
  );
};
//const mapStateToProps = state => ({
    //isAuthenticated: state.auth.isAuthenticated
//});

export default connect(null, { login})(Login);