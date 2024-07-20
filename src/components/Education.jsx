import React from "react";
import "../styles/education.scss";
import "../styles/mediaQueries.scss";

function Education() {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        my <span>education</span>
      </h1>

      <div className="box-container education-container">
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2019</span>
          <h3>10th</h3>
          <p>D.F.D Madhymik Vidhyalay, Nashik, Maharashtra</p>
        </div>

        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2021</span>
          <h3>12th</h3>
          <p>Chhatrapati Shivaji Maharaj Jr. Science College, Jalgaon</p>
        </div>

        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2024</span>
          <h3>IV-Integrated MCA</h3>
          <p>
            Currently I am in the fourth year of Integrated-MCA at KCE'S
            Institute Of Management and Research Center, Jalgaon, Maharashtra.
          </p>
        </div>
      </div>

      <h4>my Internships -</h4>

      <div className="box-container internships-container">
        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2023</span>
          <h3>Web Development and Design Intern at Oasis Infobyte</h3>
          <p>Internship by Oasis Infobyte</p>
        </div>

        <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>2023</span>
          <h3>Web Development and Design Intern at Sparks Foundation</h3>
          <p>Internship by Sparks Foundation</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
