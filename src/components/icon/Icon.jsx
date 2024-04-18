import style from './icon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, onClick, size, color }) => {
  return (
    <FontAwesomeIcon
      className={`${style.icon} ${
        size === 'large' ? style.large : size === 'medium' ? style.medium : ''
      } ${color === 'white' ? style.white : color === 'primary' ? style.primary :''}`}
      icon={icon}
      onClick={onClick}
    />
  );
};

export default Icon;
