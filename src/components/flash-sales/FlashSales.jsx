import { useEffect, useRef } from 'react';
import style from './flashSales.module.css';
import SubHeading from '../sub-heading/SubHeading';
import ExpandedSubHeading from '../expanded-sub-heading/ExpandedSubHeading';
import { register } from 'swiper/element/bundle';
import ProductCard from '../product-card/ProductCard';
import LazyProductCard from '../lazy-products/LazyProductCard';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
register();

const FlashSales = () => {
  const swiperRef = useRef();

  const fetchFlashSalesProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    return await response.json();
  };

  const { data, isLoading, error, isSuccess } = useReactQuery(
    ['products'],
    fetchFlashSalesProducts
  );

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      breakpoints: {
        0: {
          slidesPerView: 2.4,
          spaceBetween: 10,
        },

        768: {
          slidesPerView: 4.4,
          spaceBetween: 10,
          navigation: true,
        },
        1024: {
          slidesPerView: 5.4,
          spaceBetween: 10,
        },
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            border-radius: 50%;
            border:none;
            color: #171717;
            width: 1rem;
            height: 1rem;
            padding:.5rem;
          
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className={style.flash_sales}>
      <SubHeading text={`Todays's`} />
      <div className={style.header}>
        <ExpandedSubHeading text='Flash Sales' />
      </div>

      <div className={style.products_container}>
        <swiper-container ref={swiperRef} init='false'>
          {!isLoading && !error
            ? [...data.products].reverse().map((product) => (
                <swiper-slide key={product.id}>
                  <ProductCard product={product} purpose='carousel' />
                </swiper-slide>
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
                <swiper-slide key={product}>
                  <LazyProductCard purpose='carousel' product={product} />
                </swiper-slide>
              ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default FlashSales;
