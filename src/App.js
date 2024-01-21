import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
//import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/products-list" element={<ProductList />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/admin" element={<AdminDashboard />} />
             <Route path="/user" element={<UserDashboard />} />
             <Route path="/products-details" element={<ProductDetails/>} />
             <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;