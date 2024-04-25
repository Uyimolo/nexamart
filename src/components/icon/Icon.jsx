/* eslint-disable react/prop-types */
import style from './icon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon, onClick, size, color, title }) => {
  return (
    <FontAwesomeIcon
      className={`${style.icon} ${
        size === 'large' ? style.large : size === 'medium' ? style.medium : ''
      } ${color === 'white' ? style.white : color === 'primary' ? style.primary :''} ${icon === faSpinner ? style.rotate : ''}`}
      icon={icon}
      onClick={onClick}
      title={title}
    />
  );
};

export default Icon;
