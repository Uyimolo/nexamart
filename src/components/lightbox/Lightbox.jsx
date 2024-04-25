/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import style from './lightbox.module.css';

const Lightbox = ({ imagesArray }) => {
  console.log(imagesArray);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (imagesArray) setCurrentImage(imagesArray[0]);
  }, [imagesArray]);

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
                  className={style.thumbnail}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
