import React from "react";
import "./services.css";
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Structures and Algorithms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>GitHub</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>PostgreSQL</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
