import React from "react";
import { Link } from "react-router-dom";

function ProductItem(item) {

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  

  const addToCart = () => {
   
  }
  const addToWishlist = () => {
    
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
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
      <button onClick={addToWishlist}>Add to Wish List</button>
    </div>
  );
}

export default ProductItem;
