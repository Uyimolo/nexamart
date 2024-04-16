import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './spinner.module.css';

const Spinner = () => {
  return (
    <div className={style.rotate}>
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
};

export default Spinner;
