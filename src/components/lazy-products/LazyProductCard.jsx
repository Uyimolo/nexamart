/* eslint-disable react/prop-types */
import style from './lazyProductCard.module.css';

const LazyProductCard = ({purpose}) => {
  return (
    <div
      className={`${style.product_card} ${
        purpose === 'carousel' ? style.carousel : ''
      }`}>
      <div className={style.product_card_top}>
        <div className={style.product_image}>
        </div>
      </div>
      <div className={style.product_info}>
        <p className={style.name}></p>
        <div className={style.product_price_and_rating}>
          <p className={style.price}></p>
        </div>
      </div>
    </div>
  );
};

export default LazyProductCard;
