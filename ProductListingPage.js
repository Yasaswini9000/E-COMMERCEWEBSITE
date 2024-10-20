import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';

const mockProducts = [
  { id: 1, name: 'Product 1', price: '$10', image: 'image1.jpg' },
  { id: 2, name: 'Product 2', price: '$20', image: 'image2.jpg' },
  { id: 3, name: 'Product 3', price: '$30', image: 'image3.jpg' },
  { id: 4, name: 'Product 4', price: '$40', image: 'image4.jpg' }
];

function ProductListingPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedProducts = mockProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <Header />
      <div className="product-list">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(mockProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
      <AddToCartModal
        product={selectedProduct}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default ProductListingPage;
