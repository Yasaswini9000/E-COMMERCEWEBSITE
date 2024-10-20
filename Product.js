import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <div className="actions">
        <Link to={`/thank-you/${product.name}`}>
          <button>View Product</button>
        </Link>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
