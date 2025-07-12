import React, { useRef, useEffect } from "react";
import "../styles/contact.scss";
import "../styles/mediaQueries.scss";

function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxy16CRUGHH6oWwK7ApYuJkQvltTn-h5bhCoevkMYOsvJSsjdcoAxyCQVbW9k45JOiZBQ/exec"; // Replace with your actual Google Apps Script URL
    const form = formRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      })
        .then((response) => {
          alert("Message sent successfully!");
          form.reset();
        })
        .catch((error) => {
          alert("Failed to send message. Try again.");
          console.error("Error!", error.message);
        });
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        contact <span>me</span>
      </h1>
      <div className="row">
        <div className="content">
          <h1 className="title">contact info</h1>
          <div className="info">
            <h3>
              <i className="fas fa-envelope"></i> sagarbendale2004@gmail.com
            </h3>
            <h3>
              <i className="fas fa-phone"></i> +91 7666856451
            </h3>
            <h3>
              <i className="fas fa-map-marker-alt"></i> Jalgaon, India - 425001
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

        <form name="submit-to-google-sheet" ref={formRef}>
          <input
            type="text"
            name="Name"
            placeholder="name"
            className="box"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="email"
            className="box"
            required
          />
          <input
            type="text"
            name="Project"
            placeholder="project"
            className="box"
          />
          <textarea
            name="Message"
            cols="30"
            rows="10"
            className="box message"
            placeholder="message"
            required
          ></textarea>
          <button type="submit" className="btn">
            send <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
