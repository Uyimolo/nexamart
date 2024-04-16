import style from  './button.module.css'

import Icon from '../icon/Icon';

const Button = ( {icon}) => {
  return (
    <button className={style.cta}>
      Shop Now
     {icon && <Icon icon={icon} color='white' />}
    </button>
  );
}

export default Button
