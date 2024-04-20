import { Link } from 'react-router-dom';
import style from './logo.module.css'

const Logo = () => {
  return (
    <Link>
      <p className={style.logo}>Nexamart</p>
    </Link>
  );
};

export default Logo;
