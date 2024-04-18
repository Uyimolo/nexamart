import ExpandedSubHeading from '../expanded-sub-heading/ExpandedSubHeading';
import SubHeading from '../sub-heading/SubHeading';
import style from './productsList.module.css';
import ProductCard from '../product-card/ProductCard';
import LazyProductCard from '../lazy-products/LazyProductCard';
import useReactQuery from '../../custom-hooks/useReactQuery';

const ProductsList = () => {
  const fetchProducts = async () => {
    const response = await fetch(
      'https://api.escuelajs.co/api/v1/products?offset=0&limit=12'
    );
    return await response.json();
  };

  const {
    data: products,
    isLoading,
    error,
  } = useReactQuery(['products'], fetchProducts);

  if (error) return <div className=''></div>;

  return (
    <div className={style.products_list}>
      <SubHeading text='Our Products' />
      <div className={style.header}>
        <ExpandedSubHeading text='Explore Our Products' />
        <p>See all</p>
      </div>

      <div className={style.products_container}>
        {!isLoading
          ? products.map((product) => (
              <ProductCard purpose='grid' product={product} key={product.id} />
            ))
          :
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
              <LazyProductCard purpose='grid' product={product} key={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductsList;
