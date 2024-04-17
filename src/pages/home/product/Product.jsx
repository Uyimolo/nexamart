import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import style from './product.module.css';
import Lightbox from '../../../components/lightbox/Lightbox';
import ProductDetails from '../../../components/product_details/ProductDetails';

const Product = () => {
  const { productId } = useParams();
  // const formattedProductName = productName.replace(/-/g, ' ');
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`
      );

      if (!response.ok) {
        throw new Error(`Error fetching product: ${response.statusText}`);
      }

      const data = await response.json();
      setProductData(data);
      // console.log(data);
    } catch (error) {
      console.error('Error fetching product:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <div className={`${style.product_container} page`}>
      {isLoading && <p>Loading product details...</p>}
      {error && <p>Error: {error}</p>}
      {productData && (
        <div className={style.product_info}>
          <Lightbox imagesArray={productData.images} />
          <ProductDetails product={productData} />
        </div>
      )}
    </div>
  );
};

export default Product;
