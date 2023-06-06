import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <img 
            className='header_logo'
            src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div
        className='header_search'>
            <input className='header_searchInput' type = "text"/>

            {/*logo*/}
        </div>
        
        <div className='header_nav'>
          <div className='header_option'>
            <span className='header__optionLineone'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>

          </div>
          <div className='header_option'>
            <span className='header__optionLineone'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>

          <div className='header_option'>
            <span className='header__optionLineone'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        
        </div>
    </div>
  )
}

export default Header
