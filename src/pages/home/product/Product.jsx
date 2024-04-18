import { useState } from 'react';
import { useParams } from 'react-router';
import style from './product.module.css';
import Lightbox from '../../../components/lightbox/Lightbox';
import ProductDetails from '../../../components/product_details/ProductDetails';
import useReactQuery from '../../../custom-hooks/useReactQuery';

const Product = () => {
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(0);

  const fetchProduct = async () => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
    return await response.json();
  };

  const {
    data: product,
    isLoading,
    error,
  } = useReactQuery(['product'], fetchProduct);

  const handleSetQuantity = (mode) => {
    if (mode === 'increase') {
      setQuantity(quantity + 1);
    } else {
      if (quantity !== 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div className={`${style.product_container} page`}>
      {isLoading && <p>Loading product details...</p>}
      {error && <p>Error: {error}</p>}
      {product && (
        <div className={style.product_info}>
          <Lightbox imagesArray={product.images} />
          <ProductDetails
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            handleSetQuantity={handleSetQuantity}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
