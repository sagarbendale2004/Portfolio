import React, { useState, useEffect } from "react";
import "../styles/header.scss";
import "../styles/mediaQueries.scss";
import profileImage from "../assets/img14.jpg";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={menuOpen ? "toggle" : ""}>
        <div className="user">
          <img src={profileImage} alt="my image" />
          <h3 className="name">Bendale Sagar</h3>
          <p className="post">Aspiring Frontend Developer</p>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link smooth to="/#home">
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="/#about">
                About
              </Link>
            </li>
            <li>
              <Link smooth to="/#education">
                Education
              </Link>
            </li>
            <li>
              <Link smooth to="/#portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link smooth to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div
        id="menu"
        className={`fas fa-bars ${menuOpen ? "fa-times" : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}

export default Header;
