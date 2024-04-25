import InfiniteScrollProducts from '../../components/infinite-scroll-products/InfiniteScrollProducts';
import SubHeading from '../../components/sub-heading/SubHeading'
import style from './products.module.css';
const Products = () => {
  return (
    <div className={`page ${style.products}`}>
      <SubHeading text='Browse products' />
      <InfiniteScrollProducts />
    </div>
  );
};

export default Products;
