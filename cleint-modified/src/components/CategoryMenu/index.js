import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import ProductList from '../../components/ProductList';

function CategoryMenu() {

  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];
 console.log(categories);

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button key={item._id}>
          <ProductList category={item} /> 
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
