import React from 'react';
import style from './flashSales.module.css';
import SubHeading from '../sub-heading/SubHeading';
import ExpandedSubHeading from '../expanded-sub-heading/ExpandedSubHeading';
import { useProductsSelectors } from '../../store/products';
import { register } from 'swiper/element/bundle';
import ProductCard from '../product-card/ProductCard';
import LazyProductCard from '../lazy-products/LazyProductCard';
register();

const FlashSales = () => {
  // const products = [
  //   {
  //     id: 1,
  //     title: 'Majestic Mountain Graphic T-Shirt',
  //     price: 44,
  //     description:
  //       'Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.',
  //     images: [
  //       'https://i.imgur.com/QkIa5tT.jpeg',
  //       'https://i.imgur.com/jb5Yu0h.jpeg',
  //       'https://i.imgur.com/UlxxXyG.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: 'Classic Heather Gray Hoodie',
  //     price: 69,
  //     description:
  //       'Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.',
  //     images: [
  //       'https://i.imgur.com/cHddUCu.jpeg',
  //       'https://i.imgur.com/CFOjAgK.jpeg',
  //       'https://i.imgur.com/wbIMMme.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: 'Classic Grey Hooded Sweatshirt',
  //     price: 90,
  //     description:
  //       'Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.',
  //     images: [
  //       'https://i.imgur.com/R2PN9Wq.jpeg',
  //       'https://i.imgur.com/IvxMPFr.jpeg',
  //       'https://i.imgur.com/7eW9nXP.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: 'Classic Black Hooded Sweatshirt',
  //     price: 79,
  //     description:
  //       'Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.',
  //     images: [
  //       'https://i.imgur.com/cSytoSD.jpeg',
  //       'https://i.imgur.com/WwKucXb.jpeg',
  //       'https://i.imgur.com/cE2Dxh9.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: 'Classic Comfort Fit Joggers',
  //     price: 25,
  //     description:
  //       'Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.',
  //     images: [
  //       'https://i.imgur.com/ZKGofuB.jpeg',
  //       'https://i.imgur.com/GJi73H0.jpeg',
  //       'https://i.imgur.com/633Fqrz.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 8,
  //     title: 'Classic Red Jogger Sweatpants',
  //     price: 98,
  //     description:
  //       'Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.',
  //     images: [
  //       'https://i.imgur.com/9LFjwpI.jpeg',
  //       'https://i.imgur.com/vzrTgUR.jpeg',
  //       'https://i.imgur.com/p5NdI6n.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 9,
  //     title: 'Classic Navy Blue Baseball Cap',
  //     price: 61,
  //     description:
  //       'Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.',
  //     images: [
  //       'https://i.imgur.com/R3iobJA.jpeg',
  //       'https://i.imgur.com/Wv2KTsf.jpeg',
  //       'https://i.imgur.com/76HAxcA.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 10,
  //     title: 'Classic Blue Baseball Cap',
  //     price: 86,
  //     description:
  //       'Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.',
  //     images: [
  //       'https://i.imgur.com/wXuQ7bm.jpeg',
  //       'https://i.imgur.com/BZrIEmb.jpeg',
  //       'https://i.imgur.com/KcT6BE0.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 11,
  //     title: 'Classic Red Baseball Cap',
  //     price: 35,
  //     description:
  //       'Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.',
  //     images: [
  //       'https://i.imgur.com/cBuLvBi.jpeg',
  //       'https://i.imgur.com/N1GkCIR.jpeg',
  //       'https://i.imgur.com/kKc9A5p.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  //   {
  //     id: 12,
  //     title: 'Classic Black Baseball Cap',
  //     price: 58,
  //     description:
  //       'Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.',
  //     images: [
  //       'https://i.imgur.com/KeqG6r4.jpeg',
  //       'https://i.imgur.com/xGQOw3p.jpeg',
  //       'https://i.imgur.com/oO5OUjb.jpeg',
  //     ],
  //     creationAt: '2024-04-15T19:06:34.000Z',
  //     updatedAt: '2024-04-15T19:06:34.000Z',
  //     category: {
  //       id: 1,
  //       name: 'Clothes',
  //       image: 'https://i.imgur.com/QkIa5tT.jpeg',
  //       creationAt: '2024-04-15T19:06:34.000Z',
  //       updatedAt: '2024-04-15T19:06:34.000Z',
  //     },
  //   },
  // ];
  const products = useProductsSelectors.use.products();

  return (
    <div className={style.flash_sales}>
      <SubHeading text={`Todays's`} />
      <div className={style.header}>
        <ExpandedSubHeading text='Flash Sales' />
        {/* <p>See all</p> */}
      </div>

      <div className={style.products_container}>
        <swiper-container
          breakpoints={JSON.stringify({
            0: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 3.4,
              spaceBetween: 10,
              navigation: true,
            },
            1024: {
              slidesPerView: 6.4,
              spaceBetween: 10,
            },
          })}>
          {products &&
            products.map((product) => (
              <swiper-slide>
                <ProductCard product={product} purpose='carousel' />
              </swiper-slide>
            ))}
          {!products.length > 0 &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => (
              <swiper-slide>
                <LazyProductCard purpose='carousel' product={product} />
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default FlashSales;
