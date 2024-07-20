import React from "react";
import "../styles/contact.scss";
import "../styles/mediaQueries.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        contact <span>me</span>
      </h1>

      <div className="row">
        <div className="content">
          <h1 className="title">contact info</h1>

          <div className="info">
            <h3>
              <i className="fas fa-envelope"></i> sagarbendale2004@gmail.com{" "}
            </h3>
            <h3>
              <i className="fas fa-phone"></i> +91 7666856451{" "}
            </h3>
            <h3>
              <i className="fas fa-map-marker-alt"></i> Jalgaon, india - 425001{" "}
            </h3>
            <div className="icons">
              <a
                href="https://www.instagram.com/bendale_sagar/"
                className="fa fa-instagram"
              ></a>
              <a
                href="https://www.linkedin.com/in/sagarbendale7666856451/"
                className="fa fa-linkedin"
              ></a>
              <a
                href="https://github.com/sagarbendale2004?tab=repositories"
                className="fa fa-github"
              ></a>
            </div>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="text" placeholder="project" className="box" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="box message"
            placeholder="message"
          ></textarea>
          <button type="submit" className="btn">
            {" "}
            send <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
