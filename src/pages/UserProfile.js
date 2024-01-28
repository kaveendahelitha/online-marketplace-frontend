import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';




const UserProfile = () => {
  return (
   
  
    <div className="bg-white py-24 sm:py-32">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          USER PROFILE
        </p>
      <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ display:'flex',justifyContent:'center',alignItems:'center'}} >
      <div className="flex flex-wrap justify-center items-start gap-8">
      
        {/* Change Personal Details Form */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200" style={{ backgroundColor: '#f3f4f6', padding: '20px',width:'800px' }}>
          <div className="p-8 sm:p-10 lg:flex-auto lg:ml-auto">
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 heading4"> Change Personal Details </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <form >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                    <div className="col-span-full">
                      <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Photo
                      </label>
                      <div className="mt-2 flex items-center gap-x-3">
                      <UserCircleIcon className="h-32 w-32 text-gray-300" aria-hidden="true" />


                        <button
                          type="button"
                          className="rounded-md bg-blue-600 px-2.5 
                          py-1.5 text-sm font-semibold text-white shadow-sm 
                          ring-1 ring-inset ring-blue-300 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="border-b border-gray-900/10 pb-12">

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">

                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Update
                </button>

              </div>
            </form>

          </div>
        </div>

        {/* Change Password Form */}
        <div className="mx-auto mt-20 max-w-2xl rounded-3xl ring-1 ring-gray-200 transform -translate-y-4" style={{ backgroundColor: '#f3f4f6', padding: '20px'}}>
          <div className="p-8 sm:p-10 lg:flex-auto lg:ml-auto">
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 heading4"> Change Password </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <form >
              <div className="space-y-12">


                <div className="border-b border-gray-900/10 pb-12">

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Current Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        New Password
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">

                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Update
                </button>

              </div>
            </form>
          </div>
          
        </div>

      
      </div>
    </div>
    </div>
   
    
  );


};

export default UserProfile;