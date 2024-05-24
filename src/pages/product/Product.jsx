import { useParams } from 'react-router';
import style from './product.module.css';
import Lightbox from '../../components/lightbox/Lightbox';
import ProductDetails from '../../components/product_details/ProductDetails';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import { useEffect, useState } from 'react';

const Product = () => {
  const { productId } = useParams();

  const [images, setImages] = useState();
  const url = `https://dummyjson.com/products/${productId}`;
  const fetchProduct = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data, isLoading, error } = useReactQuery(
    ['product', url],
    fetchProduct
  );

  useEffect(() => {
    if (data) {
      setImages(data.images);
    }
  }, [data, isLoading]);

  // const images =
  //   product.images.filter((image) => !image.includes('thumbnail')) || [];

  return (
    <div className={`${style.product_container} page`}>
      {
        <div className={style.product_info}>
          {/* <div className={style.lightbox_container}></div> */}
          <Lightbox isLoading={isLoading} error={error} imagesArray={images} />
          {data && <ProductDetails product={data} />}
        </div>
      }
    </div>
  );
};

export default Product;
