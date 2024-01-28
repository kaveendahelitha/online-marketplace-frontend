import React, { useEffect , Fragment } from 'react';
import Navbar from '../components/NavbarDefault';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';
import { load_user } from '../actions/Profile';


const Layout = ({ children, checkAuthenticated, load_user }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, [checkAuthenticated,load_user]);

    return (
        <Fragment>
        <Navbar />
          {children}
        </Fragment>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);