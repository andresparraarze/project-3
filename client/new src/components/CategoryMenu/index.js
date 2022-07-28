import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

function CategoryMenu() {

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
   

  const handleClick = (id) => {
    
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
})
}

export default CategoryMenu;
