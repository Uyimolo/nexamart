import style from './home.module.css';
import LargeHeader from '../../components/large-header-image/LargeHeader';
import Categories from '../../components/categories/Categories';
import ProductsList from '../../components/products-list/ProductsList';

const Home = () => {
  return (
    <div className='page home'>
      
        <LargeHeader />
      {/* product list */}

      <ProductsList />
    </div>
  );
};

export default Home;
