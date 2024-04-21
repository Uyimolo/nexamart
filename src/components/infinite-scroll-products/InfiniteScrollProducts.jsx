import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import ProductCard from '../product-card/ProductCard';
import style from './infiniteScrollProducts.module.css';

const InfiniteScrollProducts = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);

  const fetchProducts = async ({ pageParam }) => {
    const url = `https://api.escuelajs.co/api/v1/products?offset=${pageParam}&limit=12`;

    const response = await fetch(url);
    console.log(url);
    setIndex((prevIndex) => prevIndex + 1);
    return response.json();
  };

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['paginatedContent'],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return allPages[allPages.length - 1].length * index;
    },
  });

  useEffect(() => {
    if (data) {
      const newProducts = data.pages[data.pages.length - 1];

      data.pages[data.pages.length - 1].length === 12
        ? setHasNextPage(true)
        : setHasNextPage(false);
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    }
  }, [data]);

  return (
    <div className={style.products_list}>
      <div className={style.products_container} id='products_container'>
        {products.map((product) => (
          <ProductCard purpose='grid' product={product} key={product.id} />
        ))}
      </div>
      {/* todo: find out why the origin hasNextPage property from useInfinitequery didnt work? */}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        {hasNextPage ? 'Fetch more data' : 'No more products'}
      </button>
    </div>
  );
};

export default InfiniteScrollProducts;
