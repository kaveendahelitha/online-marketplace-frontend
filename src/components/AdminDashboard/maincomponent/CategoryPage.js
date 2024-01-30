import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const CategoryForm = () => {
  const [categoryview, setCategoryNames] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryName = async () => {
    const response = await axios.get('http://localhost:8000/api/categoryview/');
    setCategoryNames(response.data);
  };

  useEffect(() => {
    getCategoryName();
  }, []);

  const handleUpdateClick = (category) => {
    setSelectedCategory(category);
    setUpdateModalOpen(true);
  };

  const handleUpdateModalClose = () => {
    setUpdateModalOpen(false);
  };

  const handleUpdateSubmit = async () => {
    try {
      // Update category in the database
      await axios.put(`http://localhost:8000/api/categoryview/${selectedCategory.id}/`, {
        category_name: selectedCategory.category_name,
      });

      // Close the modal
      setUpdateModalOpen(false);

      // Refresh the category list
      getCategoryName();
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      // Delete category from the database
      await axios.delete(`http://localhost:8000/api/categoryview/${selectedCategory.id}/`);

      // Close the modal
      setDeleteModalOpen(false);

      // Refresh the category list
      getCategoryName();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleDeleteCancel = () => {
    // Handle delete cancel logic here
    console.log('Delete canceled');

    // Close the modal
    setDeleteModalOpen(false);
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    // Add category to the database
    await axios.post('http://localhost:8000/api/categoryview/', {
      category_name: categoryName,
    });

    // Refresh the category list
    getCategoryName();

    // Clear the input field
    setCategoryName('');
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Add Update Modal */}
      <Modal
        isOpen={isUpdateModalOpen}
        onRequestClose={handleUpdateModalClose}
        contentLabel="Update Category Modal"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-zinc-400 w-full max-w-md p-4 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Update Category</h2>
            <button
              onClick={handleUpdateModalClose}
              className="text-gray-700 hover:text-red-500"
            >
              &times;
            </button>
          </div>

          {/* Update form elements */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="updateCategoryName"
            >
              Updated Category Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="updateCategoryName"
              type="text"
              placeholder="Enter Updated Category name"
              value={selectedCategory ? selectedCategory.category_name : ''}
              onChange={(e) =>
                setSelectedCategory({
                  ...selectedCategory,
                  category_name: e.target.value,
                })
              }
            />
          </div>

          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
              onClick={handleUpdateSubmit}
            >
              Update
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleUpdateModalClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      {/* Add Delete Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleDeleteModalClose}
        contentLabel="Delete Category Modal"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0"
      >
        <div className="bg-zinc-400 w-full max-w-md p-4 rounded-md">
          <div className="modal-header bg-gray-700 text-white p-2">
            <h2>Are you sure you want to delete this category?</h2>
            <button onClick={handleDeleteModalClose} className="float-right text-white">
              &times;
            </button>
          </div>

          <div className="modal-body p-4 flex justify-center items-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              onClick={handleDeleteConfirm}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleDeleteCancel}
            >
              No
            </button>
          </div>
        </div>
      </Modal>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleCategorySubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="categoryName"
            type="text"
            placeholder="Enter Category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add category
          </button>
        </div>
      </form>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-bold mb-4">Category List</h2>

        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2">Category Name</th>
              <th className=" p-2">Update</th>
              <th className=" p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {categoryview.map((category, index) => (
              <tr className="border p-2" key={index}>
                <td className="p-2">{category.category_name}</td>
                <td className=" p-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleUpdateClick(category)}
                  >
                    Update
                  </button>
                </td>
                <td className="p-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDeleteClick(category)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryForm;
