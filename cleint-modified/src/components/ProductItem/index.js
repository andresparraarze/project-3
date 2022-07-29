import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_TO_WISHLIST } from '../../utils/mutations';

function ProductItem(item) {

  const [addToWishlist, { error }] = useMutation(ADD_TO_WISHLIST);

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  

  const addToCart = () => {
   
  }
  const addToWish = async() => {
    try {
      const { data } = await addToWishlist({variables: { products: _id },});
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
};

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
      <button onClick={addToWish}>Add to Wish List</button>
    </div>
  );
}

export default ProductItem;
