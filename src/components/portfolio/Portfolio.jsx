import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/restaurant.jpg'
import IMG2 from '../../assets/WeLoveMovies.jpg'
import IMG3 from '../../assets/flashcard.jpg'
import IMG4 from '../../assets/RecipeTrackerAPP.jpg'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="restaurant reservation" />
          </div>
            <h3>Restaurant Reservations</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/ValerieAlejandraa/RestaurantReservations" className='btn' target='_blank'>Github</a>
            <a href="https://restaurantreservationfrontend.onrender.com/dashboard?date=2023-09-07" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="we love movies" />
          </div>
            <h3>WeLoveMovies</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/ValerieAlejandraa/WeLoveMovies" className='btn' target='_blank'>Github</a>
            <a href="https://welovemoviesfrontend.onrender.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="flashcard app" />
          </div>
            <h3>Flashcard App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/ValerieAlejandraa/FlashCardApp" className='btn' target='_blank'>Github</a>
            <a href="https://flashcard-app-xinh.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
 
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="recipe tracker app" />
          </div>
            <h3>Recipe Tracker App</h3>
            <div className="portfolio__item-c">
            <a href="https://github.com/ValerieAlejandraa/RecipeTrackerApp" className='btn' target='_blank'>Github</a>
            <a href="https://recipetrackerapp.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>

            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;