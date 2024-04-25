/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './productCardStars.module.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCardStars = ({  totalStars = 5, rating }) => {

  // get random rating (the api doesnt provide rating information for products)

  // const rating = (Math.random() * (totalStars - 2)) + 2 ;
  // Calculate the integer part of the rating
  const integerRating = Math.floor(rating);
  // Calculate the fractional part of the rating
  const fractionalRating = rating - integerRating;

  // Array to hold the stars JSX
  const stars = [];

  // Render full stars
  for (let i = 1; i <= integerRating; i++) {
    stars.push(
      <div className={style.star} key={i}>
        <FontAwesomeIcon
          icon={faStar}
          className={`${style.icon} ${style.active}`}
        />
      </div>
    );
  }

  if (fractionalRating > 0) {
    stars.push(
      <div
        className={`${style.star} ${style.fraction} `}
        key={integerRating + 1}>
        <FontAwesomeIcon icon={faStar} className={`${style.icon}`} />
        <FontAwesomeIcon
          icon={faStar}
          className={`${style.icon} ${style.half}`}
        />
      </div>
    );
  }

  // Render remaining empty stars
  if (fractionalRating) {
    for (let i = integerRating + 2; i <= totalStars; i++) {
      stars.push(
        <div className={style.star} key={i}>
          <FontAwesomeIcon icon={faStar} className={style.icon} />
        </div>
      );
    }
  } else {
    for (let i = integerRating + 1; i <= totalStars; i++) {
      stars.push(
        <div className={style.star} key={i}>
          <FontAwesomeIcon icon={faStar} className={style.icon} />
        </div>
      );
    }
  }

  return <div className={style.stars_container}>{stars}</div>;
};

export default ProductCardStars;
