import React from "react";
import "../styles/about.scss";
import "../styles/mediaQueries.scss";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span> me
      </h1>

      <div className="row">
        <div className="info">
          <h3>
            <span> Name : </span> Bendale Sagar Rajesh
          </h3>
          <h3>
            <span> Age : </span> 20{" "}
          </h3>
          <h3>
            <span> Qualification : </span> TY-Integrated MCA{" "}
          </h3>
          <h3>
            <span> Hobbies : </span> Playing Chess, Reading Books, Learning New
            Technologies, Traveling{" "}
          </h3>
          <h3>
            <span> Skills : </span> React, Javascript, Html, Css, Chakra-ui,
            Scss{" "}
          </h3>
          <h3>
            <span> Language : </span> English,Hindi,Marathi{" "}
          </h3>
          <a href="https://drive.google.com/file/d/1e1Zfio2XXjQkNfPwp3XybGIzi_soobUz/view" target="_blank>
            <button className="btn">
              Download CV <i className="fas fa-download"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
