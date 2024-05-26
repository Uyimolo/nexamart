// import style from './home.module.css';
import LargeHeader from '../../components/large-header-image/LargeHeader';
import ProductsList from '../../components/products-list/ProductsList';
import FlashSales from '../../components/flash-sales/FlashSales';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import TrendingCategories from '../../components/trending-categories/TrendingCategories';
import mainHeaderImage from '../../assets/images/shirt_1.png';
import secondHeaderImage from '../../assets/images/earphone.png';

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
      {/* main header */}
      <LargeHeader
        image={mainHeaderImage}
        color='black'
        title={`Men's shirts`}
        text='5% off on every purchase made'
        cta='Shop now'
        link={`/categories/mens-shirts`}
      />

      <FlashSales />

      {/* <FeaturedProduct /> */}
      <LargeHeader
        image={secondHeaderImage}
        color='green'
        title='Mobile Accessories'
        text='Enhance your mobile experience.'
        cta='Shop now'
        link='/categories/mobile-accessories'
      />

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
