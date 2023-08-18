import React, { useState } from 'react'
import './gallery.css'

import room7 from '../assets/images/room (1).jpeg'
import room8 from '../assets/images/room (2).jpeg'
import room9 from '../assets/images/room (3).jpeg'
import room10 from '../assets/images/room (4).jpeg'
import room11 from '../assets/images/room (5).jpeg'
import room12 from '../assets/images/room (6).jpeg'
import room13 from '../assets/images/room (7).jpeg'

export const Gallery = ({ galleryType }) => {
  const [bigImageSrc, setBigImageSrc] = useState('https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(1).jpeg?raw=true');
  const [activeImage, setActiveImage] = useState(0);
  const banquetImages = [
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(1).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(2).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(3).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(4).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(5).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(6).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(7).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(9).jpeg?raw=true',
    'https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(11).jpeg?raw=true',
  ];

  const roomImages = [
    room7,room10,room11,room9,room13
  ];
  const toggleImage = (index) => {
    setBigImageSrc(images[index]);
    setActiveImage(index);
  };  

  const images = galleryType === "banquet" ? banquetImages : roomImages;
  return (
    <section className="gallery">
    <div className="product">
      <div className="product-small-image">
        {images.map((src, index) => (
          <img
            key={index}
            className={`hvr-shrink${activeImage === index ? ' active' : ''}`}
            src={src}
            alt=""
            onClick={() => toggleImage(index)}
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        ))}
      </div>

      <div className="product-big-image">
        <img src={bigImageSrc} alt="" id="big-image" loading="lazy"/>
      </div>
    </div>
    </section>
  )
}
