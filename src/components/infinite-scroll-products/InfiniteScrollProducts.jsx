import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import Button from '../button/Button';
import ProductCard from '../product-card/ProductCard';
import style from './infiniteScrollProducts.module.css';
import LazyProductCard from '../lazy-products/LazyProductCard';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router';

const InfiniteScrollProducts = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  // const [hasNextPage, setHasNextPage] = useState(false);
  const location = useLocation();

  const fetchProducts = async ({ pageParam }) => {
    const url = `https://dummyjson.com/products?limit=10&skip=${pageParam}`;

    const response = await fetch(url);
    setIndex((prevIndex) => prevIndex + 1);
    return response.json();
  };

  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['paginatedContent', location],
      queryFn: fetchProducts,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        if (
          allPages[allPages.length - 1].total !==
          allPages[allPages.length - 1].skip
        ) {
          return allPages[allPages.length - 1].products.length * index;
        } else {
          return null;
        }
      },
    });

  // console.log(index)

  useEffect(() => {
    if (data) {
      const newProducts = data.pages[data.pages.length - 1];
      setProducts((prevProducts) => [...prevProducts, ...newProducts.products]);
    }
  }, [data]);

  useEffect(() => {
    setProducts([]);
    setIndex(0);
  }, []);

  return (
    <div className={style.products_list}>
      <div className={style.products_container} id='products_container'>
        {!isLoading
          ? products.map((product) => (
              <ProductCard purpose='grid' product={product} key={product.id} />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
              <LazyProductCard purpose='grid' product={product} key={product} />
            ))}
      </div>
      {index > 0 && hasNextPage && (
        <div className={style.fetch_more_products_button}>
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            text='See more products.'
            color='secondary'
            width='full'
            icon={isFetchingNextPage ? faSpinner : ''}
          />
        </div>
      )}
      {!hasNextPage && index > 0 && (
        <p className={style.no_products}>No more products</p>
      )}
    </div>
  );
};

export default InfiniteScrollProducts;
