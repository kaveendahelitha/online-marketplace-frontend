import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';

const Navbar = ({ isAuthenticated, logout }) => {
    const authLinks = (
        <Fragment>
            <button className='nav-item'>
                <Link className='nav-link' to='/dashboard'>Dashboard</Link>
            </button>
            <button className='nav-item'>
                <button className='nav-link cursor-pointer' onClick={logout}>Logout</button>
            </button>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <button className='nav-item'>
                <Link className='nav-link' to='/login'>Login</Link>
            </button>
            <button className='nav-item'>
                <Link className='nav-link' to='/signup'>Register</Link>
            </button>
        </Fragment>
    );

    return (
        <nav className='bg-light p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link className='text-lg font-bold text-gray-800' to='/'>E mazz</Link>
                <button
                    className='lg:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600'
                    type='button'
                >
                    <svg className='fill-current h-3 w-3' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M0 4 h20 v-2 h-20 v2 z M0 9 h20 v-2 h-20 v2 z M0 14 h20 v-2 h-20 v2 z'></path>
                    </svg>
                </button>
                <div className='hidden lg:flex items-center' id='navbarNav'>
                    <ul className='flex items-center'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
