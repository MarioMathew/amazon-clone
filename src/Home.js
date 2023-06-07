import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>

        <img
          className='home__image'
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt = ""
          />

          <div className = "home__row">
            <Product 
            id = "456778"
            title = "Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, One Size (S & L Bands Included) (Black)" 
            price = {8242.99} 
            image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}
            rating = {4}/>
            <Product

            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={12802.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            {/*Product*/}
          </div>

          <div className = "home__row">
            <Product
            

            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={59908}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"

            />
            <Product
            
            id="3254354345"
            title="Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance"
            price={189598}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_SY400_.jpg"
            />
            {/*<Product/>*/}
          </div>

          <div className = "home__row">
            <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>

      </div>
      
    </div>
  )
}

export default Home
