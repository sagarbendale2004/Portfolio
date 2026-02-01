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
            <span> Name: </span> Bendale Sagar Rajesh
          </h3>
          <h3>
            <span> Age: </span> 21
          </h3>
          <h3>
            <span> Qualification: </span> Integrated-MCA (Final Year)
          </h3>
          <h3>
            <span> Hobbies: </span> Playing Chess, Reading Books, Learning New
            Technologies, Traveling
          </h3>
          <h3>
            <span> Technical Skills: </span> ASP.NET, ADO.NET, React, JavaScript, HTML, CSS, Chakra-UI,
            SCSS. <br />
            <span> Basic Understandings: </span> Node.js, Express, MongoDB
          </h3>
          <h3>
            <span> Languages: </span> English, Hindi, Marathi
          </h3>
          <a
            href="https://drive.google.com/file/d/1e1Zfio2XXjQkNfPwp3XybGIzi_soobUz/view"
            target="_blank"
            rel="noopener noreferrer"
          >
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
