import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const Shop = () => {
  const { data } = useQuery(QUERY_ALL_PRODUCTS);

  const products = data?.products || [];

  return (
    <div name='shop' className='w-full h-auto bg-[#000000] text-white'>

        {/*Title section of the shopping area */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <p className='text-4xl font-bold flex pt-4 items-center justify-center border-b-4 border-white'>
            SHOP NOW 
          </p>
          <p className='flex items-center justify-center font-bold text-1xl py-4'>
            Men and Women
          </p>

          {/*Shopping area section */}
          <div className='w-full bg-[#ffffff] grid grid-cols-1 md:grid-cols-4 p-5 sm:grid-cols-2 gap-4 text-center'>
            {products.map((product, i) => (
              <div key = {i} className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
              {/* <img className='w-100 mx-auto' src={products.image} alt="shopping item 1" /> */}
              <p className='text-black font-bold my-4'>
                {product.name}
              </p>
            </div>
            ))}
        </div>
      </div> 
    </div>
  )
}

export default Shop;