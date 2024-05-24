/* eslint-disable react/prop-types */
import style from './productDetails.module.css';
import ProductCardStars from '../product-card-stars/ProductCardStars';
import Icon from '../icon/Icon';
import { faCertificate, faRecycle, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import AddToCart from '../add-to-cart/AddToCart';
const ProductDetails = ({ product, isLoading, error }) => {
  if (isLoading) return;
  if (error) return;
  return (
    <div className={style.details}>
      <div className={style.product_info}>
        <h2>{product.title}</h2>
        <p className={style.price}>{`$${product.price}`}</p>

        <div className={style.rating_price}>
          <ProductCardStars rating={product.rating} />
          <p className={style.available}>{`${
            product.stock ? `In stock (${product.stock})` : 'Out of stock'
          }`}</p>
        </div>

        <p>{product.description}</p>
      </div>

      <div className={style.delivery_info}>
        <div className={style.delivery}>
          <Icon icon={faTruckFast} size='large' />
          <div className={style.delivery_details}>
            <h4>Free Delivery</h4>
            <p>{product.shippingInformation}</p>
          </div>
        </div>
        <div className={style.delivery}>
          <Icon icon={faRecycle} size='large' />
          <div className={style.delivery_details}>
            <h4>Return Delivery</h4>
            <p>Free 7 Days Delivery Returns. Details</p>
          </div>
        </div>
        <div className={style.delivery}>
          <Icon icon={faCertificate} size='large' />
          <div className={style.delivery_details}>
            <h4>Warranty Info</h4>
            <p>{product.warrantyInformation}</p>
          </div>
        </div>
      </div>
      <div className={style.reviews_container}>
        <h3>Product rating and reviews</h3>
        <div className={style.reviews}>
          {product.reviews.map((review) => (
            <div key={review.reviewerName} className={style.review}>
              <ProductCardStars totalStars={5} rating={review.rating} />
              <p>{review.comment}</p>
              <div className={style.review_author_with_date}>
                <p>{`By ${review.reviewerName}`}</p>
                <p>
                  {new Date(review.date).toLocaleDateString('en-GB', {
                    weekday: 'short',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.add_to_cart}>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
