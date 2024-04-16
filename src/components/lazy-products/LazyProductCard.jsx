import style from './lazyProductCard.module.css';

const LazyProductCard = ({purpose, product}) => {
  return (
    <div
      className={`${style.product_card} ${
        purpose === 'carousel' ? style.carousel : ''
      }`}>
      <div className={style.product_card_top}>
        <div className={style.product_image}>
          {/* <img src={firstImage} alt={product?.title} /> */}
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
