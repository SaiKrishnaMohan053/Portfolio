import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="fw-bold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="nali text-decoration-none text-secondary m-2">Home</a></li>
              <li><a href="#about" className="nali text-decoration-none text-secondary m-2">About</a></li>
              <li><a href="#work" className="nali text-decoration-none text-secondary m-2">Work</a></li>
              <li><a href="#contact" className="nali text-decoration-none text-secondary m-2">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold text-white mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-secondary">📧 saikrishnamohan.k@gmail.com</li>
              <li className="mb-2 text-secondary">📞 +1 (251) 721-7855</li>
              <li className="text-secondary">📍 Mobile, AL</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;