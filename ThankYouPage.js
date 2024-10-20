import React from 'react';
import { useParams } from 'react-router-dom';

function ThankYouPage() {
  const { productName } = useParams();

  return (
    <div>
      <h1>Thank You for your interest in {productName}!</h1>
    </div>
  );
}

export default ThankYouPage;
