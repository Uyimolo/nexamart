/* eslint-disable react/prop-types */
import { useCartSelectors } from '../../store/cartStore';
import Button from '../button/Button';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const AddToCart = ({ product }) => {
  const addToCart = useCartSelectors.use.addToCart();
  const cart = useCartSelectors.use.cart();

  const handleAddToCart = () => {
    if (cart) {
      const newCartObject = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      };
      addToCart(newCartObject);
    }
  };

  return (
    <Button
      icon={faCartPlus}
      text='Add To Cart'
      width='full'
      onClick={handleAddToCart}
      disabled={product.stock === 0}
      variant='secondary'
    />
  );
};

export default AddToCart;
