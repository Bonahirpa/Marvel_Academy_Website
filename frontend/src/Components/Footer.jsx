import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <h3>Pages for Marvels Academy Website</h3>
            <ul>
              <li>
                <a href="#home">🏠 Home</a>
              </li>
              <li>
                <a href="#about">📖 About Us</a>
              </li>
              <li>
                <a href="#academic">🎓 Academics</a>
              </li>
              <li>
                <a href="#admission">📝 Admission & Enrollment</a>
              </li>
              <li>
                <a href="#event">🗞 Events & News</a>
              </li>
              <li>
                <a href="#gallery">📸 Gallery</a>
              </li>
              <li>
                <a href="#contact">📞 Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Information</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Marvels Academy, Assela,
              Ethiopia
            </p>
            <p>
              <i className="fas fa-phone-alt"></i>{" "}
              <a href="tel:+1234567890">+251909090909</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:contact@marvelsacademy.com">
                contact@marvelsacademy.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Marvels Academy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer
