import React from "react";

function Products() {
  return (
    <div>
      <h1 className="text-2xl pl-6 py-10">Products List</h1>
      <div>
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-10">
          Update Product
        </button>
      </div>
      <div></div>
      <div>
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-10">
          Delete Product
        </button>
      </div>
      <div>
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default Products;
