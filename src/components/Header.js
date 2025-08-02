import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './header.css';

const headerVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const mobileNavVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } }
};

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`app-header ${isScrolled ? 'scrolled' : ''}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="#home" className="logo">
          <Code size={28} />
          <span>SaiKrishnaMohan_Kolla</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links d-none d-md-flex">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="mailto:ksaikrishnamohan1501@gmail.com"
             className="hire-btn"
             target="_blank"
             rel="noreferrer">
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="menu-btn d-md-none"
          onClick={() => setIsMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="mobile-nav d-md-none"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:ksaikrishnamohan1501@gmail.com"
              className="hire-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;