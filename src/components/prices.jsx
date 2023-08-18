import React from 'react'
import "./prices.css"
const Price = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="product-img">
          <img src="https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/banquet%20(2).jpeg?raw=true" height="420" width="650" loading="lazy" alt="Harvest Vase" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>Banquet Hall</h1>
            <h2>by Hotel Celebration</h2>
            <ul className='product-text'>
              <li>Central AC</li><li> Security Guards</li> <li>24/7 Power Backup</li><li> Large Halls</li><li> Beautiful Decoration </li>
            </ul>
          </div>
          <div className="product-price-btn">
            <p>₹<span>50,000</span> </p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="product-img">
          <img src="https://github.com/Subhadeeep25/hotel-celebration/blob/main/src/assets/images/room%20(7).jpeg?raw=true" height="420" width="650" alt="Harvest Vase" loading="lazy" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>Rooms</h1>
            <h2>by Hotel Celebration</h2>
            <ul className='product-text'>
              <li>Central AC</li><li> Security Guards</li> <li>24/7 Power Backup</li><li> Wi-fi</li><li> Attached Washrooms </li>
            </ul>
          </div>
          <div className="product-price-btn">
            <p>₹<span>1500</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
 export default Price;