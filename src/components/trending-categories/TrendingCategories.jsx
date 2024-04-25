import style from './trendingCategories.module.css';
import SubHeading from '../sub-heading/SubHeading';
import iphone from '../../assets/images/iphone-15.png';
import lady from '../../assets/images/lady.png';
import shoes from '../../assets/images/shoes-brown.png';
import man from '../../assets/images/man.png';
import { Link } from 'react-router-dom';

const TrendingCategories = () => {
  return (
    <div className={style.trending_categories}>
      <SubHeading text='Trending Categories' />
      <div className={style.categories_container}>
        <div className={`${style.left} ${style.image}`}>
          <img src={iphone} alt='' />
          <div className={style.details}>
            <h3>Smart Phones</h3>
            <p>
              Experience the latest in smartphone technology with our range of
              cutting edge smartphones.
            </p>
            <Link>Shop Now</Link>
          </div>
        </div>
        <div className={style.right}>
          <div className={`${style.right_top} ${style.image}`}>
            <img src={lady} alt='' />
            <div className={style.details}>
              <h3>{`Women's collection`}</h3>
              <p>{`Elevate your style with  our trendy and timeless women's wear collection`}</p>
              <Link to={`categoriesmen's-wear`}>Shop Now</Link>
            </div>
          </div>
          <div className={style.right_bottom}>
            <div className={`${style.bottom_left} ${style.image}`}>
              <img src={shoes} alt='' />
              <div className={style.details}>
                <h3>Mens Shoes</h3>
                <p>{`Step up your shoe game with our vast collection of stylish and comfortable shoes for all occasions.`}</p>
                <Link>Shop Now</Link>
              </div>
            </div>
            <div className={`${style.bottom_right} ${style.image}`}>
              <img src={man} alt='' />
              <div className={style.details}>
                <h3>{`Men's Wear`}</h3>
                <p>{`Upgrade your wardrobe with our stylish and comfortable men;s wear range, shop now and dress to impress.`}</p>
                <Link>Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
