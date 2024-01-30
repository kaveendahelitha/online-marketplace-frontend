import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CustomizePage() {
  const [products, setProducts] = useState([]);
  const [categoryView, setCategoryView] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [updatedImage, setUpdatedImage] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedCategory, setUpdatedCategory] = useState('');

  const getProductList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/productview/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  const getCategoryNames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/categoryview/');
      setCategoryView(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setUpdatedImage(null);
    setUpdatedName(product.name);
    setUpdatedPrice(product.price);
    setUpdatedDescription(product.description);
    setUpdatedCategory(product.category);
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('image', updatedImage);
      formData.append('name', updatedName);
      formData.append('price', updatedPrice);
      formData.append('description', updatedDescription);
      formData.append('category', updatedCategory);
      await axios.put(`http://localhost:8000/api/productview/${selectedProduct.id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setShowUpdateModal(false);
      getProductList();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/productview/${selectedProduct.id}/`);
      setDeleteModalOpen(false);
      getProductList();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    getProductList();
    getCategoryNames();
  }, []);

  return (
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
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleUpdateClick(product)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDeleteClick(product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showUpdateModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 modal">
          <div className="bg-white w-96 p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Update Product</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
              <input
                type="file"
                onChange={(e) => setUpdatedImage(e.target.files[0])}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
              <input
                type="number"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="w-full border p-2 rounded"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
              <select
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categoryView.map((categoryItem) => (
                  <option key={categoryItem.id} value={categoryItem.id}>
                    {categoryItem.category_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end">
              <button onClick={handleUpdateSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Update
              </button>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteModalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 modal">
          <div className="bg-white w-96 p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Delete Product</h2>
            <p className="mb-4">
              Are you sure you want to delete {selectedProduct && selectedProduct.name}?
            </p>

            <div className="flex justify-end">
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
