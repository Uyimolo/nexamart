import { useParams } from 'react-router';
import style from './product.module.css';
import Lightbox from '../../components/lightbox/Lightbox';
import ProductDetails from '../../components/product_details/ProductDetails';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import { useEffect, useState } from 'react';

const Product = () => {
  const { productId } = useParams();

  const [images, setImages] = useState();

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

  useEffect(() => {
    if (product) {
      const imagesString = product.images.join(',');

      // for malformed image arrays. REMEMBER TO LEAVE A COMPLAINT AFTER THANKING THEM FOR THIS AWESOME API
      const regex = /"([^"]*)"/g;
      let match;
      const validImages = [];

      while ((match = regex.exec(imagesString))) {
        validImages.push(match[1]);
      }

      validImages.length > 0
        ? setImages(validImages)
        : setImages(product.images);
    }
  }, [product, isLoading]);

  return (
    <div className={`${style.product_container} page`}>
      {isLoading && <p>Loading product details...</p>}
      {error && <p>Error: {error.message}</p>}
      {product && (
        <div className={style.product_info}>
          <Lightbox imagesArray={images} />
          <ProductDetails
            product={product}
            // quantity={quantity}
            // setQuantity={setQuantity}
            // handleSetQuantity={handleSetQuantity}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
