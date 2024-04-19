/* eslint-disable react/prop-types */
import style from './cartImage.module.css';

const CartImage = ({ productImage, title }) => {
  return <img src={productImage} alt={title} className={style.image} />;
};

export default CartImage;
