import React from "react";
import "../styles/portfolio.scss";
import vedioHub from "../assets/vedioHub.png";
import XCrypto from "../assets/XCrypto.png";
import star from "../assets/star.png";
import boostrap from "../assets/boostrap.png";
import expense from "../assets/expense.png";
import discovery from "../assets/discovery.png";
import "../styles/mediaQueries.scss";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        {" "}
        my <span>portfolio</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <a href="https://new-vediohub.netlify.app">
            <img src={vedioHub} alt="VedioHub" />
          </a>
        </div>
        <div className="box">
          <a href="https://xcrypto-for-allcrypto-lovers.netlify.app/">
            <img src={XCrypto} alt="XCrypto" />
          </a>
        </div>
        <div className="box">
          <a href="https://github.com/sagarbendale2004/Expense-Management-System">
            <img src={expense} alt="Expense Management system" />
          </a>
        </div>
        <div className="box">
          <a href="https://discovery-landing-page.netlify.app">
            <img src={discovery} alt="Discovery landing page" />
          </a>
        </div>
        <div className="box">
          <a href="https://star-fitness.netlify.app">
            <img src={star} alt="Star-Fitness" />
          </a>
        </div>
        <div className="box">
          <a href="https://ecourses-boostrapwebsite.netlify.app">
            <img src={boostrap} alt="Boostrap-webiste" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
