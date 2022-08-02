import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';
import { ADD_TO_WISHLIST, ADD_ORDER } from '../utils/mutations';

const Shop = () => {
  // const { category } = useParams();
  // const { loading, data } = useQuery(category ? QUERY_PRODUCTS : QUERY_ALL_PRODUCTS, {variables: {category: category}});
  const { loading, data } = useQuery( QUERY_ALL_PRODUCTS );
  const [addToWishlist, { error }] = useMutation(ADD_TO_WISHLIST);
  const [addOrder, { e }] = useMutation(ADD_ORDER);

  console.log(loading);
  const productData = data?.products || [];
console.log('in shop', productData);

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
    console.log(data);
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

  return (
    <>
    {productData.length ? (
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
          
          {productData.map((product) => (
            
          <div key={product._id} className='shadow-md shadow-[#3b3b3d] hover:scale-110 hover:cursor-pointer duration-500'>
            {/* <Link to={`/products/${product._id}`}> */}
              <img className='w-100 mx-auto' src={`/images/${product.images}`} alt={product.name} />
              <p className='text-black font-bold my-4'>
                {product.name}
              </p>
              <p className='text-black font-bold my-4'>
                ${product.price}
              </p>
              <div class="inline-flex p-3">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={addToCart} >
                  Cart
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={addToWish}>
                  WishList
                </button>
              </div>
            {/* </Link> */}
          </div>
          ))}
        </div>
      </div>
     </div> 
      ) : (
        <h3>No products to view yet. Please visit later.</h3>
      )}
    </>
  )
}

export default Shop;