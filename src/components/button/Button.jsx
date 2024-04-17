import style from './button.module.css';

import Icon from '../icon/Icon';

const Button = ({ icon, text }) => {
  return (
    <button className={style.cta}>
      {text}
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export default Button;
