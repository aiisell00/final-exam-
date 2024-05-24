import React from 'react'
import "./index.scss"


const HomePage = () => {
  return ( 
    <main>
    <section id='slider'>
        <div className="big-photo">
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="big-foto"
           />
        </div>
        <div className="big-desc">
        <div className="off"><span>Flat</span>
            <h1>75%off</h1>
        </div>
            <h1>IT’S HAPPENING THIS SEASON!</h1>
            <button>PURCHASE NOW</button>
            </div> 
            
           
    </section>
    <section id='men'>
      <div className="container">
        <div className="men">
          <h1>New realeased Products for Men</h1>
<p>Who are in extremely love with eco friendly system.</p>
<div className="men-wripper">
  <div className="men-cards">
    <img src={``} alt="" />
    <h3>{``}</h3>
    <h1>{``}</h1>
  </div>
</div>
        </div>
      </div>
    </section>
    <section id='women'>
      <div className="container">
        <div className="women">
          <h1>New realeased Products for WoMen</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          <div className="women-wripper">
            <div className="women-cards">
              <img src={``} alt="" />
              <h3>{``}</h3>
              <h1>{``}</h1>
            </div>
            </div>
        </div>
      </div>
    </section>
    <section id='product'>
      <div className="container">
        <div className="product">
          <h1>Related Searched Products</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          <div className="product-wripper">
            <div className="product-cards">
              <img src={``} alt="" />
              <h3>{``}</h3>
              <h1>{``}</h1>
            </div>
            </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default HomePage