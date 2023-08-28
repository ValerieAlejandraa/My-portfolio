import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about_card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>4+ Completed Projects</small>
          </article>
        </div>
        <p>
        First-Generation College Graduate and Software Engineer, proficient in front-end and back-end programming languages obtained through a fast-paced coding bootcamp. Multi-disciplinary collaborative thinker with a background in Journalism, Global Studies, and English seeking to apply transferable and latest technical skills in a software development position. 
        </p>
        <a href="#contact" className='btn btn'>Let's Talk</a>
      </div>
      </div>
      
      
      </section>
  )
}

export default About;