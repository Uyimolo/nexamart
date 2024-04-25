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
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    return await response.json();
  };

  const { data, isLoading, error } = useReactQuery(['productt'], fetchProduct);

  useEffect(() => {
    if (data) {
      setImages(data.images);
    }
  }, [data, isLoading]);

  // const images =
  //   product.images.filter((image) => !image.includes('thumbnail')) || [];

  return (
    <div className={`${style.product_container} page`}>
      {isLoading && <p>Loading product details...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className={style.product_info}>
          <Lightbox imagesArray={images} />
          <ProductDetails product={data} />
        </div>
      )}
    </div>
  );
};

export default Product;
