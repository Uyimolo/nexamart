/* eslint-disable react/prop-types */
import style from './largeHeader.module.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const LargeHeader = ({ color, image, title, text, cta, link }) => {
  return (
    <div
      className={style.large_header}
      style={{ backgroundColor: `var(--${color})` }}>
      <div className={style.header_details}>
        <p className={style.title}>{title}</p>
        <h1>{text}</h1>

        <Link to={link} className={style.cta}>
          <Button text={cta} icon={faArrowRight} />
        </Link>
      </div>
      <div className={style.header_image}>
        <img
          alt=''
          src={image}
        />
      </div>
    </div>
  );
};

export default LargeHeader;
