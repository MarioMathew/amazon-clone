
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
              <SearchIcon className = "header_searchIcon" />
          </div>
          
          <div className='header_nav'>
            <div className='header_option'>
              <span className='header__optionLineone'>Hello Customer</span>
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
  
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            </div>
          
          </div>
      </div>
    )
  }
  
  export default Header
  