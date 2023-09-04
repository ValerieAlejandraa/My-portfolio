import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>Restaurant Reservations</h3>
            <a href="https://github.com/ValerieAlejandraa/RestaurantReservations" className='btn'>Github</a>
            <a href="https://restaurantreservationfrontend.onrender.com/dashboard?date=2023-09-07" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;