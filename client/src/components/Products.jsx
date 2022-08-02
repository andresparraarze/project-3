//this is the page in which more info is displayed about a product
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TO_WISHLIST, ADD_ORDER } from '../utils/mutations';
import { QUERY_ALL_PRODUCTS} from '../utils/queries';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};


const Products = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
 
  const productData = data?.products || [];
  console.log(productData);
  const product = productData[0] ;
  
console.log(product);
  const [addToWishlist, { error }] = useMutation(ADD_TO_WISHLIST);
  const [addOrder, { e }] = useMutation(ADD_ORDER);


  const addToCart = async(_id) => {
    try {
      const { data } = await addOrder({variables: { products: _id },});
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  const addToWish = async(_id) => {
    try {
      const { data } = await addToWishlist({variables: { products: _id },});
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.images}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          {/* <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">$ {product.price}</p>

            {/* Reviews */}
            {/* <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.reviews.average} out of 5 stars</p>
                <a href={product.reviews.href} className="ml-3 text-sm font-medium text-yellow-600 hover:text-yellow-400">
                  {product.reviews.totalCount} reviews
                </a>
              </div>
            </div>  */}

            <form className="mt-10">
  
              <button
                type="submit"
                className="mt-10 w-full bg-yellow-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
};

export default Products;