import React, { useState } from 'react';
import style from './lightbox.module.css';

const Lightbox = ({ imagesArray }) => {
  const [currentImage, setCurrentImage] = useState(imagesArray[0]);

  return (
    <div className={style.lightbox_container}>
      <div className={style.lightbox}>
        <div className={style.current_image}>
          <img src={currentImage} alt='' />
        </div>

        <div className={style.thumbnails}>
          {imagesArray.slice(0, 4).map((image) => (
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
