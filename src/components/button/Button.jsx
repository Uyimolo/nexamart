/* eslint-disable react/prop-types */
import style from './button.module.css';

import Icon from '../icon/Icon';
const Button = ({
  icon,
  text,
  onClick,
  disabled,
  variant = 'default',
  width = '',
}) => {
  let color, iconColor;

  if (variant === 'default') {
    color = 'primary';
    iconColor = 'white';
  } else if (variant === 'secondary') {
    color = 'secondary';
    iconColor = 'white';
  } else if (variant === 'white') {
    color = '';
    iconColor = 'black';
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style.cta} ${
        color === 'primary'
          ? style.primary
          : color === 'secondary'
          ? style.secondary
          : ''
      } ${width === 'full' ? style.full : ''}`}>
      {text}
      {icon && <Icon className={style.icon} icon={icon} color={iconColor} />}
    </button>
  );
};

export default Button;
