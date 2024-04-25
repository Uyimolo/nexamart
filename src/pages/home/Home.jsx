// import style from './home.module.css';
import LargeHeader from '../../components/large-header-image/LargeHeader';
import ProductsList from '../../components/products-list/ProductsList';
import FlashSales from '../../components/flash-sales/FlashSales';
import FeaturedProduct from '../../components/Featured-product/FeaturedProduct';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import TrendingCategories from '../../components/trending-categories/TrendingCategories';

const url = `https://dummyjson.com/products?limit=10`;

const Home = () => {
  const fetchProducts = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data, isLoading, error, isSuccess } = useReactQuery(
    ['products', url],
    fetchProducts
  );

  return (
    <div className='page home'>
      <LargeHeader />
      <FlashSales />
      <FeaturedProduct />
      <ProductsList
        products={data?.products}
        isLoading={isLoading}
        error={error}
        isSuccess={isSuccess}
        subHeadings={['Our Products', 'Explore Our Products']}
      />
      <TrendingCategories />
    </div>
  );
};

export default Home;
