import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
//import ProductList from './pages/ProductList';
//import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/UserDashboard';
//import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
//import ProductDetails from './pages/ProductDetails';

//import Activate from './pages/Activate';
//import ResetPassword from './pages/ResetPassword';
//import ResetPasswordConfirm from './pages/ResetPasswordConfirm';

import store from './store';

import Layout from './hocs/Layout';
import { Provider } from 'react-redux';

//import PrivateRoute from './hocs/PrivateRoute';








const App = () => {

  return (
    <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/signup" element={<Layout><SignUp /></Layout>} />
      <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />
      <Route path='/admindashboard' element={<AdminDashboard />} />
    </Routes>
  </Router>
</Provider>
  );
};


export default App;