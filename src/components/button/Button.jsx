/* eslint-disable react/prop-types */
import style from './button.module.css';

import Icon from '../icon/Icon';

const Button = ({ icon, text, color, width, iconSize, onClick, disabled, iconColor }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style.cta} ${
        color === 'secondary' ? style.secondary : ''
      } ${width === 'full' ? style.full : ''}`}>
      {text}
      {icon && <Icon className={style.icon} icon={icon} size={iconSize} color={iconColor} />}
    </button>
  );
};

export default Button;
