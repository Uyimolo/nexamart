import { useEffect, useState } from 'react';
import { useProductsSelectors } from '../../store/products';
import ExpandedSubHeading from '../expanded-sub-heading/ExpandedSubHeading';
import SubHeading from '../sub-heading/SubHeading';
import style from './productsList.module.css';
import ProductCard from '../product-card/ProductCard';
// import Filter from '../filter/Filter';
// import Icon from '../icon/Icon';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LazyProductCard from '../lazy-products/LazyProductCard';

const ProductsList = () => {
  const [productList, setProductList] = useState([]);
  const productsData = useProductsSelectors.use.fetchProducts();
  const products = useProductsSelectors.use.products();

  useEffect(() => {
    productsData();
  }, [productsData]);

  return (
    <div className={style.products_list}>
      <SubHeading text='Our Products' />
      <div className={style.header}>
        <ExpandedSubHeading text='Explore Our Products' />
        <p>See all</p>
      </div>
      {/* <Categories /> */}
      {/* <Filter /> */}

      <div className={style.products_container}>
        {products &&
          products.map((product) => (
            <ProductCard purpose='grid' product={product} />
          ))}

        {!products.length > 0 &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <LazyProductCard purpose='grid' product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
