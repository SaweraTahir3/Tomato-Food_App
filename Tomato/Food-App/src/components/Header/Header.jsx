import React from 'react'
import './Header.css';
import { assets } from '../../Food Del Frontend Assets/assets/assets';
const Header = () => {
  return (
    <div className='header' ><img className='img' src={assets.header_img} alt='' />
      <div className="header-contents">
        <h2>Order Your <br /> Favourite Food Here</h2>
        <p>choose from a diverse menu featuring a dellectable array of dishes crafted with the finest <br />
          ingredients and  culinary expertise . our mission  to satisfy your cravings and elevate your    <br />dining  experience , one  delicious meal at a time . </p>
        <button>View Menu</button>
      </div>

    </div>
  )
}

export default Header
