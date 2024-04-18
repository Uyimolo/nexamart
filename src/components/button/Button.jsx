import style from './button.module.css';

import Icon from '../icon/Icon';

const Button = ({ icon, text, color }) => {
  return (
    <button className={`${style.cta} ${color === 'primary' ? style.primary : ''}`} >
      {text}
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export default Button;
