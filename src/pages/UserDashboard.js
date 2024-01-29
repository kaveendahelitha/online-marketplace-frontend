// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { update_profile } from '../actions/Profile';
import { delete_account } from '../actions/auth';


const Dashboard = ({
  delete_account,
  update_profile,
  first_name_global,
  last_name_global,
  phone_global,
  email_global }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: ''
  });

  const { first_name, last_name, phone, email } = formData;

  useEffect(() => {
    setFormData({
      first_name: first_name_global,
      last_name: last_name_global,
      phone: phone_global,
      email: email_global
    });
  }, [first_name_global, last_name_global, phone_global, email_global]);

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    update_profile(first_name, last_name, phone, email);
  };

  return (
    <div className='container mx-auto my-8 p-8 bg-white border rounded-md'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to your User Dashboard</h1>
      <p className='mb-4'>Update your user profile below:</p>
      <form onSubmit={e => onSubmit(e)}>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600' htmlFor='first_name'>First Name</label>
          <input
            className='w-full p-2 border rounded-md'
            type='text'
            name='first_name'
            placeholder={`${first_name_global}`}
            onChange={e => onChange(e)}
            value={first_name}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600 mt-3' htmlFor='last_name'>Last Name</label>
          <input
            className='w-full p-2 border rounded-md'
            type='text'
            name='last_name'
            placeholder={`${last_name_global}`}
            onChange={e => onChange(e)}
            value={last_name}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600 mt-3' htmlFor='phone'>Phone</label>
          <input
            className='w-full p-2 border rounded-md'
            type='text'
            name='phone'
            placeholder={`${phone_global}`}
            onChange={e => onChange(e)}
            value={phone}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600 mt-3' htmlFor='email'>Email</label>
          <input
            className='w-full p-2 border rounded-md'
            type='text'
            name='email'
            placeholder={`${email_global}`}
            onChange={e => onChange(e)}
            value={email}
          />
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4' type='submit'>Update Profile</button>
      </form>
      <p className='mt-8'>
        Click the button below to delete your user account:
      </p>
      <a
        className='bg-red-500 text-white px-4 py-2 rounded-md inline-block mt-2'
        href='#!'
        onClick={delete_account}
      >
        Delete Account
      </a>
    </div>
  )
};

const mapStateToProps = state => ({
  first_name_global: state.profile.first_name,
  last_name_global: state.profile.last_name,
  phone_global: state.profile.phone,
  email_global: state.profile.email,
});

export default connect(mapStateToProps, {
  delete_account,
  update_profile
})(Dashboard);
