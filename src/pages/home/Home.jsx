import style from './home.module.css';
import LargeHeader from '../../components/large-header-image/LargeHeader';
import Categories from '../../components/categories/Categories';
import ProductsList from '../../components/products-list/ProductsList';
import FlashSales from '../../components/flash-sales/FlashSales';

const Home = () => {
  return (
    <div className='page home'>
      <LargeHeader />
      {/* categories */}
      <Categories />

      <FlashSales />

      {/* <LargeHeader /> */}

      <ProductsList />
    </div>
  );
};

export default Home;
