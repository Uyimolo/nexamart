import LazyLoad from 'react-lazyload';
import ProductCardStars from '../product-card-stars/ProductCardStars';
import style from './productCard.module.css';
import LazyImage from '../lazy-image/LazyImage';
import { Link } from 'react-router-dom';
const ProductCard = ({ product, purpose }) => {
  // const formattedProductName = product.title.replace(/\s/g, '-');
  // console.log(formattedProductName);

  const imagesString = product.images.join(',');

  // for malformed image arrays. REMEMBER TO LEAVE A COMPLAINT AFTER THANKING THEM FOR THIS AWESOME API
  const regex = /"([^"]*)"/g;
  let match;
  const validImages = [];

  while ((match = regex.exec(imagesString))) {
    validImages.push(match[1]);
  }

  const firstImage =
    validImages.length > 0 ? validImages[0] : product.images[0];
  // console.log(firstImage)

  return (
    <div
      className={`${style.product_card} ${
        purpose === 'carousel' ? style.carousel : ''
      }`}>
      <LazyLoad height='100%' offset={-200} placeholder={<LazyImage />}>
        <Link
          to={`/products/${product.id}`}
          className={style.product_card_top}>
          <div className={style.product_image}>
            <img src={firstImage} alt={product?.title} />
          </div>
        </Link>
      </LazyLoad>

      {/* <button className={style.add_to_cart}>Add To Cart</button> */}

      <div className={style.product_info}>
        <p className={style.name}>{product?.title}</p>
        <div className={style.product_price_and_rating}>
          <p className={style.price}>{`$${product?.price}`}</p>
          <ProductCardStars />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
