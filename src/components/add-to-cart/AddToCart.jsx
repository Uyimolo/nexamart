/* eslint-disable react/prop-types */
import { useCartSelectors } from '../../store/cartStore';
import Button from '../button/Button';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const AddToCart = ({ product }) => {
  const addToCart = useCartSelectors.use.addToCart();
  const cart = useCartSelectors.use.cart();

  const imagesString = product.images.join(',');

  // handle malformed image arrays.
  const regex = /"([^"]*)"/g;
  let match;
  const validImages = [];

  while ((match = regex.exec(imagesString))) {
    validImages.push(match[1]);
  }

  const firstImage =
    validImages.length > 0 ? validImages[0] : product.images[0];

  const handleAddToCart = () => {
    if (cart) {
      const newCartObject = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: firstImage,
        quantity: 1,
      };
      addToCart(newCartObject);
    }
  };

  return (
    <Button
      icon={faCartPlus}
      text='Add To Cart'
      color='secondary'
      width='full'
      iconSize='large'
      onClick={handleAddToCart}
    />
  );
};

export default AddToCart;
