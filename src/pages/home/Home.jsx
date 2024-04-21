// import style from './home.module.css';
import LargeHeader from '../../components/large-header-image/LargeHeader';
import Categories from '../../components/categories/Categories';
import ProductsList from '../../components/products-list/ProductsList';
import FlashSales from '../../components/flash-sales/FlashSales';
import FeaturedProduct from '../../components/Featured-product/FeaturedProduct';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';

const Home = () => {
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
  } = useReactQuery(['productsU'], fetchProducts);

  return (
    <div className='page home'>
      <LargeHeader />
      <Categories />
      <FlashSales />
      <FeaturedProduct />
      <ProductsList
        products={products}
        isLoading={isLoading}
        error={error}
        subHeadings={['Our Products', 'Explore Our Products']}
      />
    </div>
  );
};

export default Home;
