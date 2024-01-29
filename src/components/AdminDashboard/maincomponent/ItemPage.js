import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ItemPage = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categoryView, setCategoryView] = useState([]);

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image);  // Append the file to the FormData
      formData.append('name', name);
      formData.append('price', parseInt(price, 10));  // Convert to integer if needed
      formData.append('description', description);
      formData.append('category', category);
  
      // Add product to the database using FormData
      await axios.post('http://localhost:8000/api/productview/', formData);
  
      // Reset form fields
      setImage(null);
      setName('');
      setPrice('');
      setDescription('');
      setCategory('');
    } catch (error) {
      console.error('Error submitting product:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  //get category part
  const getCategoryNames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/categoryview/');
      setCategoryView(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategoryNames();
  }, []);

  return (


    <div className="container mx-auto mt-8">
      <div className="w-3/4 mx-auto bg-white shadow p-5 rounded-md">
        <h2 className="text-center text-2xl font-semibold mb-4">Add a Product</h2>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleProductSubmit}
          encType="multipart/form-data"  // Corrected typo here
        >
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Select Image To Upload
            </label>
            <input
              type="file"
              id="image"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="image"

              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Name"
              name="product"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="form-control form-control-lg"
              placeholder="Price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>


          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>


          {/* ... (other input fields) */}

          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
              Select Category
            </label>
            <select
              id="category"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select a category</option>
              {categoryView.map((categoryItem, index) => (
                <option key={index} value={categoryItem.id}>
                  {categoryItem.category_name}
                </option>
              ))}
            </select>
          </div>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type='submit'
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemPage;

