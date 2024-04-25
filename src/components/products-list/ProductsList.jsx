/* eslint-disable react/prop-types */
import ExpandedSubHeading from '../expanded-sub-heading/ExpandedSubHeading';
import SubHeading from '../sub-heading/SubHeading';
import style from './productsList.module.css';
import ProductCard from '../product-card/ProductCard';
import LazyProductCard from '../lazy-products/LazyProductCard';
import { Link } from 'react-router-dom';

const ProductsList = ({
  error,
  isSuccess,
  isLoading,
  products,
  subHeadings,
}) => {

  return (
    <div className={style.products_list}>
      {subHeadings && subHeadings[0] && <SubHeading text={subHeadings[0]} />}
      <div className={style.header}>
        {subHeadings && subHeadings[1] && (
          <ExpandedSubHeading text={subHeadings[1]} />
        )}
        {subHeadings && <Link to='/products'>See all</Link>}
      </div>

      <div className={style.products_container}>
        {isSuccess &&
          products?.map((product) => (
            <ProductCard purpose='grid' product={product} key={product.id} />
          ))}
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <LazyProductCard purpose='grid' product={product} key={product} />
          ))}
        {error &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
            <LazyProductCard purpose='grid' product={product} key={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
