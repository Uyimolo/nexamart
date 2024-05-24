/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import style from './lightbox.module.css';
import Icon from '../icon/Icon';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Lightbox = ({ imagesArray, error, isLoading }) => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (imagesArray) setCurrentImage(imagesArray[0]);
  }, [imagesArray]);

  // if (error) return;

  if (isLoading || error)
    return (
      <div className={`${style.lightbox_container} ${style.lightbox_loading}`}>
        <div className={style.lightbox}>
          <div className={style.current_image}>
            <Icon icon={faSpinner} />
          </div>

          <div className={style.thumbnails}>
            {[1, 2, 3, 4].map((image) => (
              <div key={image} className={style.thumbnail}></div>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <div className={style.lightbox_container}>
      <div className={style.lightbox}>
        <div className={style.current_image}>
          <img src={currentImage} alt='' />
        </div>

        <div className={style.thumbnails}>
          {imagesArray &&
            imagesArray
              .slice(0, 4)
              .map((image) => (
                <img
                  key={image}
                  src={image}
                  alt='thumbnail'
                  onClick={() => setCurrentImage(image)}
                  onMouseOver={() => setCurrentImage(image)}
                  className={style.thumbnail}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
