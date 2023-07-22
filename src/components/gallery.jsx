import React, { useState } from 'react'
import './gallery.css'
import banquet1 from '../assets/images/banquet (1).jpeg'
import banquet2 from '../assets/images/banquet (2).jpeg'
import banquet3 from '../assets/images/banquet (3).jpeg'
import banquet4 from '../assets/images/banquet (4).jpeg'
import banquet5 from '../assets/images/banquet (5).jpeg'
import banquet6 from '../assets/images/banquet (6).jpeg'

import room7 from '../assets/images/room (1).jpeg'
import room8 from '../assets/images/room (2).jpeg'
import room9 from '../assets/images/room (3).jpeg'
import room10 from '../assets/images/room (4).jpeg'
import room11 from '../assets/images/room (5).jpeg'
import room12 from '../assets/images/room (6).jpeg'
import room13 from '../assets/images/room (7).jpeg'

export const Gallery = ({ galleryType }) => {
  const banquetImages = [
    banquet1,
    banquet2,
    banquet3,
    banquet4,
    banquet5,
    banquet6,
  ];

  const roomImages = [
    room7,room10,room11,room12,room8,room9,room13
  ];

  const images = galleryType === "banquet" ? banquetImages : roomImages;
  return (
    <div className="container">
    <div className="row">
    {images.map((images, index) => (
     <img
     key={index}
     src={images}
     alt={`Image ${index}`}
     loading="lazy"
     class="col-md-4 tile"
   />
      ))}
    </div>
    </div>
  )
}
