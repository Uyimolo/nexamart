import InfiniteScrollProducts from '../../components/infinite-scroll-products/InfiniteScrollProducts';
// import ProductsList from '../../components/products-list/ProductsList';
// import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import style from './products.module.css';
const Products = () => {
  // const fetchProducts = async () => {
  //   const response = await fetch(
  //     'https://api.escuelajs.co/api/v1/products?offset=0&limit=12'
  //   );
  //   return await response.json();
  // };
  // let priceMin = 10,
  //   priceMax = 200,
  //   categoryId = 4;

  // const filterUrl = `https://api.escuelajs.co/api/v1/products/${
  //   priceMin ? `?price_min=${priceMin}` : ''
  // }${priceMax ? `&price_max=${priceMax}` : ''}${
  //   categoryId ? `&category=${categoryId}` : ''
  // }`;

  // console.log(filterUrl);

  // const {
  //   data: products,
  //   isLoading,
  //   error,
  // } = useReactQuery(['products'], fetchProducts);
  return (
    <div className={`page ${style.products}`}>
      {/* filtering component that controls data shown in product list: ill get to that later */}

      {/* <ProductsList products={products} isLoading={isLoading} error={error} /> */}
      <InfiniteScrollProducts />
    </div>
  );
};

export default Products;
