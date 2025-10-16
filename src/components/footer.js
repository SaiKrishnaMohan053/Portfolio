import React from 'react';
import { motion } from 'framer-motion';
import './footer.css';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Footer = () => (
  <motion.footer
    className="app-footer"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container">
      <div className="row">
        <motion.div className="col-md-3 footer-section footer-links" variants={item}>
          <h5 className="footer-title">Quick Links</h5>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </motion.div>
        <motion.div className="col-md-5 footer-section footer-contact" variants={item}>
          <h5 className="footer-title">Contact Info</h5>
          <p>📧 saikrishnakolla93@gmail.com</p>
          <p>📞 +1 (251) 721-7855</p>
          <p>📍 United States</p>
        </motion.div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;