
//import HomeCta from '../components/Comm/Home/HomeCta';
import Navbar from'../components/Navbar';
import Footer from '../components/Footer';
//import CustomizePage from '../components/AdminDashboard/maincomponent/CustomizePage';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your Django API endpoint
    axios.get('http://localhost:8000/api/productview/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); 
  
  return (
    <>
     <Navbar/>

     
      



      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product details</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      



      
     < Footer/>
     </>
  );
};

export default Home;