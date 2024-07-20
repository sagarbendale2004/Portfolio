import React from "react";
import "../styles/home.scss";
import "../styles/mediaQueries.scss";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <h3>HI THERE !</h3>
        <h1>
          I'M <span> Sagar Bendale </span>
        </h1>
        <p>
          Hii Everyone, This is Sagar Rajesh Bendale.I am currently enrolled in
          Integrated-M.C.A course from KCE'S Institute of Management and
          Research Center Jalgaon. My interest in Web Development & Designing.I
          do this because I love the process of turning a dream into a code. I
          have a real passion for developing dynamic and user-interactive
          websites.
        </p>
        <a href="#about">
          <button className="btn">
            about me <i className="fas fa-user"></i>
          </button>
        </a>
      </section>
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
