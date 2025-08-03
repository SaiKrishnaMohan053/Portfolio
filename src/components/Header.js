import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import './header.css';

const headerVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const mobileNavVariants = {
  open:   { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
  closed: { height: 0,       opacity: 0, transition: { duration: 0.3 } }
};

const navLinks = [
  { name: 'Home',    href: '#home' },
  { name: 'About',   href: '#about' },
  { name: 'Work',    href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastTarget = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    lastTarget.current = href.slice(1);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`app-header ${isScrolled ? 'scrolled' : ''}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#home" className="logo">
          <Code size={28} /><span>SaiKrishnaMohan_Kolla</span>
        </a>

        <nav className="nav-links d-none d-md-flex">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:ksaikrishnamohan1501@gmail.com"
            className="hire-btn"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>
        </nav>

        <button
          className="menu-btn d-md-none"
          onClick={() => setIsMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      
      <motion.nav
        className="mobile-nav d-md-none"
        variants={mobileNavVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        onAnimationComplete={state => {
          if (state === 'closed' && lastTarget.current) {
            const el = document.getElementById(lastTarget.current);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            lastTarget.current = null;
          }
        }}
      >
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link"
            onClick={e => handleLinkClick(e, link.href)}
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
    </motion.header>
  );
}