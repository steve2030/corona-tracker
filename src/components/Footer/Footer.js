import React from "react";
import "../../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <hr />
      <div className="page-wrapper"></div>
      <footer>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo-text">
                <span className="logo-span">S</span>teve &nbsp;
                <span className="logo-span">M</span>ighty
              </h1>
              <p className="footer-para">
                I am a creative, Web Developer with command on Latest Tech
                stacks
              </p>
              <div className="contact">
                <span>
                  <i className="fas fa-envelope"></i>&nbsp; stevemighty2030@gmail.com
                </span>
              </div>
              <div className="socials">
                <a
                  href="https://www.facebook.com/profile.php?id=100041078220896"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a

                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a

                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a

                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">&copy; | Designed By mighty steve</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
